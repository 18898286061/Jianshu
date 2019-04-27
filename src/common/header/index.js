import React from 'react';

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
  render(){
    return (
      <HeaderWrapper>
        <Logo href="/" />
        <NavLeft>
          <SearchWrapper>
            <NavSearch className="active"/>
            <svg className="icon" aria-hidden="true"><use xlinkHref="#icon-fangdajing" /></svg>
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

export default Header;