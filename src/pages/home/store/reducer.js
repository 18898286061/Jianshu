import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  homeList: [],
  recommend: [],
  homePage: 1
})

export default(state = defaultState, action)=> {
  switch(action.type) {
    case actionTypes.GET_HOME_DATA:
      return state.merge({
        'topicList': fromJS(action.topicList),
        'homeList': fromJS(action.homeList),
        'recommend': fromJS(action.recommend)
      })
    case actionTypes.ADD_HOME_LIST:
      return state.merge({
        'homeList': state.get('homeList').concat(action.list),
        'homePage': action.nextPage
    })
    default:
      return state
  }
}