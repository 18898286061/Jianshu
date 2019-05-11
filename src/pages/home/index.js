import React from 'react'
import List from './component/List'
import Topic from './component/Topic'
import Recommend from './component/Recommend'
import Writer from './component/Writer'

import { connect } from 'react-redux'
import { actionCreators } from './store'


import {
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
} from './style'

class Home extends React.PureComponent{

  handleScrollTop() {
    window.scrollTo(0, 0)
  }

  render(){
    return (
      <HomeWrapper className="clearfix">
        <HomeLeft>
          <img className="banner" src="//upload.jianshu.io/admin_banners/web_images/4652/f32e7f414d86d5a1709f8e6f00ec3272fd9f604b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="" />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        { this.props.showScroll ? 
        <BackTop onClick={this.handleScrollTop}>
        <svg className="icon" aria-hidden="true">
            <use xlinkHref="#icon-up" />
        </svg>
        </BackTop> : null}
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }
}

const mapStateToPropsp = (state) => ({
  showScroll: state.getIn(['home', 'showScroll'])
})

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    dispatch(actionCreators.getHomeData())
  },

  changeScrollTopShow() {
    if (document.documentElement.scrollTop > 200) {
      dispatch(actionCreators.toggleTopShow(true))
    } else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
})

export default connect(mapStateToPropsp, mapDispatchToProps)(Home);