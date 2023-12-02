import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <News country="in" pageSize={9} category= "general"/>
        </div>
      </div>
    )
  }
}

