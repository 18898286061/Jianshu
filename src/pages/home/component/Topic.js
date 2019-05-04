import React from 'react'
import { connect } from 'react-redux'
import { TopicWrapper, TopicItem } from '../style'

class Topic extends React.Component{
  render(){
    const { topicList } = this.props
    return (
      <TopicWrapper className="clearfix">
        {
          topicList.map((item)=> {
            return (
              <TopicItem key={item.get('id')} className="clearfix">
                <img  className="itemPic" src= {item.get('imgUrl')} alt=""/>
                {item.get('title')}
              </TopicItem>
            )
          })
        }
        
        <span>更多热门专题 >></span>
      </TopicWrapper>
      
    )
  }
}

const mapStateToProps = (state)=> ({
  topicList: state.getIn(['home', 'topicList'])
})

export default connect(mapStateToProps, null)(Topic)