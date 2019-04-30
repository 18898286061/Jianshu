import * as actionCreators from './actionTypes'
import { fromJS } from 'immutable'

const defaultState = fromJS({
  focus: false
})

export default(state = defaultState, action)=> {
  if(action.type === actionCreators.SEARCH_FOCUS) {
    return state.set('focus', true) 
  } else if(action.type === actionCreators.SEARCH_BLUR) {
    return state.set('focus', false) 
  }
  return state
}
