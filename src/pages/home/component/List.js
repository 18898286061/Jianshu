import React from 'react'
import { connect } from 'react-redux'
import {
  ListWrapper,
  ListItem
} from '../style'

class List extends React.Component{
  render(){
    const { homeList } = this.props
    return (
      <ListWrapper>
        {
          homeList.map((item)=> {
            return (
              <ListItem key={item.get('id')}>
                <div>
                  <h2>{item.get('title')}</h2>
                  <p>{item.get('text')}</p>
                </div>
                <img className="itemImg" src={item.get('imgUrl')} alt="" />
              </ListItem>
            )
          })
        }
      </ListWrapper>
    )
  }
}

const mapStateToProps = (state)=> ({
  homeList: state.getIn(['home', 'homeList'])
})

export default connect(mapStateToProps, null)(List)