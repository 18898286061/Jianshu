import React from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'

import { 
  DetailWrapper,
  Title,
  ImgWrapper,
  Content
} from './style'

class Detail extends React.Component{
  render(){
    const { title, imgUrl, content } = this.props
    return (
      <DetailWrapper>
        <Title>{title}</Title>
        <ImgWrapper dangerouslySetInnerHTML={{__html: imgUrl}} />
        <Content dangerouslySetInnerHTML={{__html: content}} />
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.getDetail()
  }
}

const mapStateToProps = (state)=> ({
  title: state.getIn(['detail', 'title']),
  imgUrl: state.getIn(['detail', 'imgUrl']),
  content: state.getIn(['detail', 'content'])
})

const mapStateToDispatch = (dispatch)=> ({
  getDetail() {
    dispatch(actionCreators.getDetail())
  }
})

export default connect(mapStateToProps, mapStateToDispatch)(Detail);