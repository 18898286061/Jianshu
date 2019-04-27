import React from 'react'
import { Provider } from 'react-redux'
import Header from './common/header'
import store from './store'

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Header />
      </Provider>
    )
  }
}

export default App;