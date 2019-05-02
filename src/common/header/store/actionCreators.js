import * as actionTypes from './actionTypes'
import { fromJS } from 'immutable'
import axios from 'axios'

export const SearchFocus = ()=> ({
  type: actionTypes.SEARCH_FOCUS
})

export const SearchBlur = ()=> ({
  type: actionTypes.SEARCH_BLUR
})

export const MouseEnter = ()=> ({
  type: actionTypes.MOUSE_ENTER
})

export const MouseLeave = ()=> ({
  type: actionTypes.MOUSE_LEAVE
})

export const ChangePage = (page)=> ({
  type: actionTypes.CHANGE_PAGE,
  page: page
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

const get_listInfo = (data)=> ({
  type: actionTypes.GET_LISTINFO,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 10)
})
