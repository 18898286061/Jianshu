import React from 'react';
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

require('./style.css')

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      focus: false
    }
    this.handleFocus = this.handleFocus.bind(this)
    this.handleBlur = this.handleBlur.bind(this)
  }

  handleFocus() {
    this.setState({
      focus: true
    })
  }

  handleBlur() {
    this.setState({
      focus: false
    })
  }

  render(){
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <NavLeft>
          <SearchWrapper>
            <CSSTransition
              in={this.state.focus}
              timeout={200}
              classNames="slide"
            >
              <NavSearch className = { this.state.focus ? "active" : "" }
              onFocus = {this.handleFocus}
              onBlur = {this.handleBlur}
              />
            </CSSTransition>
            <svg className = { this.state.focus ? "icon active" : "icon" } aria-hidden="true"><use xlinkHref="#icon-fangdajing" /></svg>
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
}

export default Header;