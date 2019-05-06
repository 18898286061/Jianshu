import { fromJS } from 'immutable'
import * as actionTypes from './actionTypes'

const defaultState = fromJS({
  topicList: [],
  homeList: [],
  recommend: []
})

export default(state = defaultState, action)=> {
  switch(action.type) {
    case actionTypes.GET_HOME_DATA:
      return state.merge({
        'topicList': fromJS(action.topicList),
        'homeList': fromJS(action.homeList),
        'recommend': fromJS(action.recommend)
      })
    default:
      return state
  }
}