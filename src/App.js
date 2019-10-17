import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import AboutIndex from './components/About/index';
import TeamIndex from './components/Team/index';
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
          <Route  path="/about" component={AboutIndex} />
          <Route  path="/team" component={TeamIndex} />
          {/* <Route  path="/partner" component={PartnerIndex} />
          <Route  path="/talks" component={TalksIndex} /> */}
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
