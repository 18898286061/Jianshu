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

export const HomeRight = styled.div`
  float: right;
  width: 280px;
  >.banner {
    height: 270px;
    width: 625px
    border-radius: 6px;
  }
`