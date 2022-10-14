import './App.css';
import React, { Fragment } from 'react'
import { Navbar } from "./components"
import { BlogDetails, Home, Create } from './containers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Fragment>
          <Navbar />
          <div className='content'>
            <Routes>
              <Route exact path="/create" element={<Create />} />
              <Route exact path="/" element={<Home />} />
              <Route path="/blogs/:id" element={<BlogDetails />} />
            </Routes>
          </div>
        </Fragment>
      </div>
    </Router>
  );
}

export default App;
