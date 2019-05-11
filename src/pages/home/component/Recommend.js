import React from 'react'
import { connect } from 'react-redux'

import {
  RecommendWrapper,
  RecommendList
} from '../style'

class Recommend extends React.PureComponent{
  render(){
    const { recommend } = this.props
    return (
      <RecommendWrapper>
        {
          recommend.map((item)=> {
            return(
              <RecommendList key = {item.get('id')}>
                <img src = {item.get('imgUrl')} alt="" />
              </RecommendList>
            )
          })
        }
      </RecommendWrapper>
    )
  }
}

const mapstateToProps = (state)=> ({
  recommend: state.getIn(['home', 'recommend'])
})

export default connect(mapstateToProps, null)(Recommend);