
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import React from 'react';
import Home from './components/pages/Home';


function App() {


  return (
    <div className='app'>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
     
      </Routes>
    </Router>
  </div>
  )
}

export default App ;