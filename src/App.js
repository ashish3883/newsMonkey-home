import './App.css';
import { Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'
import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';

const App =()=> {
  const pageSize = 15;
  const apiKey = process.env.REACT_APP_NEWS_API;
  const [progress, setProgress] = useState(0)
  
    return (
      <div>
        <Navbar />
        <LoadingBar
        color='#f11946'
        progress={progress} 
      />
        <div className="container">
          <Routes>
            <Route exact path='/' element={<News setProgress={setProgress} apiKey={apiKey} key="general" country="in" pageNo={pageSize} category="general" />} />
            <Route exact path='business' element={<News setProgress={setProgress} apiKey={apiKey} key="business" country="in" pageNo={pageSize} category="business" />} />
            <Route exact path='entertainment' element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" country="in" pageNo={pageSize} category="entertainment" />} />
            <Route exact path='health' element={<News setProgress={setProgress} apiKey={apiKey} key="health" country="in" pageNo={pageSize} category="health" />} />
            <Route exact path='science' element={<News setProgress={setProgress} apiKey={apiKey} key="science" country="in" pageNo={pageSize} category="science" />} />
            <Route exact path='sports' element={<News setProgress={setProgress} apiKey={apiKey} key="sports" country="in" pageNo={pageSize} category="sports" />} />
            <Route exact path='technology' element={<News setProgress={setProgress} apiKey={apiKey} key="technology" country="in" pageNo={pageSize} category="technology" />} />
          </Routes>
        </div>
      </div>
    )
  
}

export default App;