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

export const ListWrapper = styled.div`
  
`

export const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-item: center;
  padding: 30px 0px;
  border-bottom: 1px solid #f0f0f0;
  >.itemImg {
    width: 150px;
    height: 100%;
    border-radius: 4px;
    border: 1px solid #f0f0f0;
  }
  >div>h2 {
    font-size: 18px;
    font-weight: 700;
    line-height: 1.5;
  }
  >div>p {
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`

export const LoadMore = styled.div`
  border-radius: 20px;
  background-color: #a5a5a5;
  margin: 30px auto 60px;
  padding: 10px 15px;
  text-align: center;
  font-size: 15px;
  color: #fff;
  cursor: pointer;
  :hover {
    background-color: #9b9b9b;
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

export const RecommendWrapper = styled.div`
  
`

export const RecommendList = styled.div`
  >img{
    width: 100%;
    margin-bottom :6px;
  }
`