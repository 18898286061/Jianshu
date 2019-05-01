import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

export const SearchFocus = ()=> ({
  type: actionTypes.SEARCH_FOCUS
})

export const SearchBlur = ()=> ({
  type: actionTypes.SEARCH_BLUR
})

const get_listInfo = (data)=> ({
  type: actionTypes.GET_LISTINFO,
  data: fromJS(data)
})

export const getListArea = ()=> {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res)=> {
      dispatch(get_listInfo(res.data.data))
    }).catch(()=> {
      console.log('error')
    })
  }
}