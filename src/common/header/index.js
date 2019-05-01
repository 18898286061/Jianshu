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
    const { focus, list } = this.props
    if (focus) {
      return (
        <SearchList>
          <div className="searchTitle">
            <span>热门搜索</span>
            <span>换一批</span>
          </div>
          <div className="item clearfix">
            {
              list.map((item)=> {
                return <ListItem key={ item }>{ item }</ListItem>
              })
            }
          </div>
        </SearchList>
      )
    } else {
      return null
    }
  }
  
  render() {
    const { focus, handleSearchFocus, handleSearchBlur } = this.props
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
    list: state.getIn(['header', 'list'])
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
    }
  }
}


export default connect(mapStateToProps, mapDispathToProps)(Header);