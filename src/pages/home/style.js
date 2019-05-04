import styled from 'styled-components'

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 28px auto 0px;
  &.clearfix:after{
    content: "."; 
    display: block; 
    height: 0; 
    clear: both; 
    visibility: hidden;  
    }
`

export const HomeLeft = styled.div`
  float: left;
  width: 640px;
  >.banner {
    height: 270px;
    width: 625px
    border-radius: 6px;
  }
`

export const TopicWrapper = styled.div`
  padding: 10px 0px;
  margin-left: -10px;
  &.clearfix:after{
    content: "."; 
    display: block; 
    height: 0; 
    clear: both; 
    visibility: hidden;  
    }
  >span {
    float: left;
    font-size: 12px;
    color: #aaa;
    margin-left: 12px;
    padding: 11px;
  }
`

export const TopicItem = styled.div`
  display: flex;
  align-items: center;
  background: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  float:left;
  font-size: 12px;
  color: #000;
  padding-right: 4px;
  margin: 0px 0px 10px 10px;
  &.clearfix:after{
    content: "."; 
    display: block; 
    height: 0; 
    clear: both; 
    visibility: hidden;  
    }
  >.itemPic {
    width: 32px;
    height: 32px;
    margin-right: 8px;
  }
` 

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  >.banner {
    height: 270px;
    width: 625px
    border-radius: 6px;
  }
`