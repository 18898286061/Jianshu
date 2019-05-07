import axios from 'axios'
import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const changeHomeData = (result) => ({
  type: actionTypes.GET_HOME_DATA,
  topicList: result.topicList,
  homeList: result.homeList,
  recommend: result.recommend 
})

const addHomeList = (result, nextPage)=> ({
  type: actionTypes.ADD_HOME_LIST,
  list: fromJS(result),
  nextPage
})

// 创建 action 的地方
export const getHomeData = ()=> {
  return (dispatch)=> {
    axios.get('./api/HomeData.json').then((res)=> {
      const result = res.data.data
      const action = changeHomeData(result)
      dispatch(action)
    })
  }
}

export const getMoreList = (homePage)=> {
  return (dispatch)=> {
    axios.get('./api/moreList.json?page=' + homePage).then((res)=> {
      const result = res.data.data
      const action = addHomeList(result, homePage + 1)
      dispatch(action)
    })
  }
}