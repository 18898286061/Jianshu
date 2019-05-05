import { fromJS } from 'immutable'

const defaultState = fromJS({
  topicList: [],
  homeList: [],
  recommend: []
})

export default(state = defaultState, action)=> {
  switch(action.type) {
    case 'get_home_data':
      return state.merge({
        'topicList': fromJS(action.topicList),
        'homeList': fromJS(action.homeList),
        'recommend': fromJS(action.recommend)
      })
    default:
      return state
  }
}