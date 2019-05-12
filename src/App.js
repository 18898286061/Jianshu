import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import Header from './common/header'
import store from './store'

import Home from './pages/home'
import Detail from './pages/detail'

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
          <Router>
            <div>
              <Header />
              <Route path="/" exact component={Home} />
              <Route path="/detail" component={Detail} />
            </div>
          </Router>
      </Provider>
    )
  }
}

export default App;