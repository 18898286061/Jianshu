import React from 'react';
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { CSSTransition } from 'react-transition-group';

import {
  HeaderWrapper,
  Logo,
  NavLeft,
  NavRight,
  NavItem,
  NavSearch,
  SearchWrapper,
  SearchList,
  ListItem,
  Addition,
  Button,
} from './style'

require('./style.css') // 引入iconFont

class Header extends React.Component {
  getSearchListArea() {
    const { focus, mouseIn, list, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props
    const jsList = list.toJS()
    const pageList = []

    for(let i = (page - 1)*10; i < page * 10; i++) {
      if(jsList[i]){ // 此 if 语句用于解决渲染出空标签的问题
        pageList.push(
          <ListItem key={ jsList[i] }>{ jsList[i] }</ListItem>
        )
      }
    }

    if (focus || mouseIn) {
      return (
        <SearchList
          onMouseEnter = { handleMouseEnter }
          onMouseLeave = { handleMouseLeave }
        >
          <div className="searchTitle">
            <span>热门搜索</span>
            <span 
              onClick={ ()=> handleChangePage(page, totalPage, this.spinIcon) }

            >
              <svg className="icon spin" aria-hidden="true" ref={(icon)=> {this.spinIcon = icon}}>
                <use xlinkHref="#icon-spin" /></svg>
                换一批
            </span>
          </div>
          <div className="item clearfix">
            { pageList }
          </div>
        </SearchList>
      )
    } else {
      return null
    }
  }
  
  render() {
    const { 
      focus,
      handleSearchFocus,
      handleSearchBlur } = this.props
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <NavLeft>
          <SearchWrapper>
            <CSSTransition
              in={focus}
              timeout={300}
              classNames="slide"
            >
              <NavSearch className={focus ? "active" : ""}
                onFocus={handleSearchFocus}
                onBlur={handleSearchBlur}
              />
            </CSSTransition>
            <svg className={focus ? "icon active" : "icon"} aria-hidden="true"><use xlinkHref="#icon-fangdajing" /></svg>
            {this.getSearchListArea()}
          </SearchWrapper>
        </NavLeft>
        <NavRight>
          <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-Aa" /></svg>
          <NavItem className="right">登录</NavItem>
        </NavRight>
        <Addition>
          <Button className="regi">注册</Button>
          <Button className="writting"><svg className="icon" aria-hidden="true"><use xlinkHref="#icon-iconset0137" /></svg>写文章</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state)=> {
  return {
    // focus: state.get('header').get('focus')
    focus: state.getIn(['header', 'focus']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage'])
  }
}

const mapDispathToProps = (dispatch)=> {
  return {
    handleSearchFocus() {
      dispatch(actionCreators.SearchFocus())
      dispatch(actionCreators.getListArea())
    },
    handleSearchBlur() {
      dispatch(actionCreators.SearchBlur())
    },
    handleMouseEnter() {
      dispatch(actionCreators.MouseEnter())
    },
    handleMouseLeave() {
      dispatch(actionCreators.MouseLeave())
    },
    handleChangePage(page, totalPage, spin) {
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '')
      if (originAngle) {
        originAngle = parseInt(originAngle, 10)
      } else {
        originAngle = 0
      }
      spin.style.transform = `rotate(${originAngle + 360}deg)`

      if (page < totalPage) {
        dispatch(actionCreators.ChangePage(page + 1))
      } else {
        dispatch(actionCreators.ChangePage(1))
      }
    }
  }
}


export default connect(mapStateToProps, mapDispathToProps)(Header);