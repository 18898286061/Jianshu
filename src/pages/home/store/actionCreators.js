import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeHomeData = (result) => ({
  type: actionTypes.GET_HOME_DATA,
  topicList: result.topicList,
  homeList: result.homeList,
  recommend: result.recommend 
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