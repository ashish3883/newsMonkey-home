import './App.css';
import { Route, Routes } from 'react-router-dom';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <div className="container">
          <Routes>
          <Route exact path='/' element={<News key="general" country="in" pageSize={9} category="general"/>} />
          <Route exact path='business' element={<News key="business" country="in" pageSize={9} category="business"/>} />
          <Route exact path='entertainment' element={<News key="entertainment" country="in" pageSize={9} category="entertainment"/>} />
          <Route exact path='health' element={<News key="health" country="in" pageSize={9} category="health"/>} />
          <Route exact path='science' element={<News key="science" country="in" pageSize={9} category="science"/>} />
          <Route exact path='sports' element={<News key="sports" country="in" pageSize={9} category="sports"/>} />
          <Route exact path='technology' element={<News key="technology" country="in" pageSize={9} category="technology"/>} />
          </Routes>
        </div>
      </div>
    )
  }
}

