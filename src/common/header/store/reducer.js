const defaultState = {
  focus: false
}

export default(state = defaultState, action)=> {
  if(action.type === 'searchFocus') {
    return {
      focus: true
    }
  } else if(action.type === 'searchBlur') {
    return {
      focus: false
    }
  }
  return state
}
