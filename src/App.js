import React, { Component } from 'react';
// import { Button, Flex, WingBlank } from 'antd-mobile';
import './../node_modules/antd-mobile/dist/antd-mobile'
import TabBarExample from './Nav/tabbar';
import Home from './Component/home';
import New from './Component/newGoos';
import Cat from './Component/cat';
import User from './Component/user'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <TabBarExample></TabBarExample>
          <Route path='/Home' component={Home}></Route>
          <Route path='/New' component={New}></Route>
          <Route path='/Cat' component={Cat}></Route>
          <Route path='/User' component={User}></Route>
        </div>
      </Router>

    )
  }
}

export default App;
