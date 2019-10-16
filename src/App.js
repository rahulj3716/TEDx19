import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

import HomeIndex from './components/Landingpage/LandingIndex';



class App extends Component {
  constructor() {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Route exact path="/" component={HomeIndex} />
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
