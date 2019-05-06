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
  HomeRight
} from './style'

class Home extends React.Component{
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
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData()
  }
}

const mapDispatchToProps = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeData();
    dispatch(action)
  }
})

export default connect(null, mapDispatchToProps)(Home);