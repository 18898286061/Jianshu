import React from 'react';
import { connect } from 'react-redux'
import { CSSTransition } from 'react-transition-group';

import { 
  HeaderWrapper,
  Logo,
  NavLeft,
  NavRight,
  NavItem,
  NavSearch,
  SearchWrapper,
  Addition,
  Button,
} from './style'

require('./style.css') // 引入iconFont

const Header = (props)=> {
  return (
    <HeaderWrapper>
      <Logo href="/" />
      <NavLeft>
        <SearchWrapper>
          <CSSTransition
            in={props.focus}
            timeout={800}
            classNames="slide"
          >
            <NavSearch className = { props.focus ? "active" : "" }
            onFocus = {props.handleSearchFocus}
            onBlur = {props.handleSearchBlur}
            />
          </CSSTransition>
          <svg className = { props.focus ? "icon active" : "icon" } aria-hidden="true"><use xlinkHref="#icon-fangdajing" /></svg>
        </SearchWrapper>
      </NavLeft>
      <NavRight>
        <svg className = "icon" aria-hidden="true"><use xlinkHref="#icon-Aa" /></svg>
        <NavItem className="right">登录</NavItem>
      </NavRight>
      <Addition>
      <Button className="regi">注册</Button>
        <Button className="writting"><svg className="icon" aria-hidden="true"><use xlinkHref="#icon-iconset0137" /></svg>写文章</Button>
      </Addition>
    </HeaderWrapper>
  )
}

const mapStateToProps = (state)=> {
  return {
    focus: state.focus
  }
}

const mapDispathToProps = (dispatch)=> {
  return {
    handleSearchFocus() {
      const action = {
        type: 'searchFocus'
      }
      dispatch(action)
    },
    handleSearchBlur() {
      const action = {
        type: 'searchBlur'
      }
      dispatch(action)
    }
  }
}


export default connect(mapStateToProps, mapDispathToProps)(Header);