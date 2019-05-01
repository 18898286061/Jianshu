import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focus: false,
  list: []
})

export default(state = defaultState, action)=> {
  if(action.type === actionTypes.SEARCH_FOCUS) {
    return state.set('focus', true) 
  } else if(action.type === actionTypes.SEARCH_BLUR) {
    return state.set('focus', false) 
  }else if(action.type === actionTypes.GET_LISTINFO) {
    return state.set('list', action.data)
  }
  return state
}
