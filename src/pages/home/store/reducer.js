import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  homeList: [],
  recommend: [],
  homePage: 1,
  showScroll: false
})

const changeHomeData = (state, action)=> {
  return state.merge({
    'topicList': fromJS(action.topicList),
    'homeList': fromJS(action.homeList),
    'recommend': fromJS(action.recommend)
  })
}
const addHomeList = (state, action)=> {
  return state.merge({
    'homeList': state.get('homeList').concat(action.list),
    'homePage': action.nextPage
  })
}

export default(state = defaultState, action)=> {
  switch(action.type) {
    case actionTypes.GET_HOME_DATA:
      return changeHomeData(state, action);
    case actionTypes.ADD_HOME_LIST:
      return addHomeList(state, action);
    case actionTypes.TOGGLE_TOP_SHOW:
      return state.set('showScroll', action.show)
    default:
      return state
  }
}