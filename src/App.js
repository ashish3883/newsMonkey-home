import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

export default class App extends Component {
  pageSize = 15;
  state = {
    progress:0,
  }
  setProgress = (progress)=>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={this.state.progress} 
      />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<News setProgress={this.setProgress}  key="general" country="in" pageNo={this.pageSize} category="general" />} />
            <Route exact path='business' element={<News setProgress={this.setProgress}  key="business" country="in" pageNo={this.pageSize} category="business" />} />
            <Route exact path='entertainment' element={<News setProgress={this.setProgress}  key="entertainment" country="in" pageNo={this.pageSize} category="entertainment" />} />
            <Route exact path='health' element={<News setProgress={this.setProgress}  key="health" country="in" pageNo={this.pageSize} category="health" />} />
            <Route exact path='science' element={<News setProgress={this.setProgress}  key="science" country="in" pageNo={this.pageSize} category="science" />} />
            <Route exact path='sports' element={<News setProgress={this.setProgress}  key="sports" country="in" pageNo={this.pageSize} category="sports" />} />
            <Route exact path='technology' element={<News setProgress={this.setProgress}  key="technology" country="in" pageNo={this.pageSize} category="technology" />} />
          </Routes>
        </div>
      </div>
    )
  }
}

