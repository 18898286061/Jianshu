import axios from 'axios'
import * as actionTypes from './actionTypes'

const changeDetail = (title, imgUrl, content)=> ({
  type: actionTypes.CHANGE_DETAIL,
  title,
  imgUrl,
  content
})

export const getDetail = ()=> {
  return (dispatch)=> {
    axios.get('api/detail.json').then((res)=> {
      const result = res.data.data
      dispatch(changeDetail(result.title, result.imgUrl, result.content))
    })
  }
}