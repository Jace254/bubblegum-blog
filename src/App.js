import './App.css';
import React, { Fragment } from 'react'
import { Navbar } from "./components"
import { Home } from './containers'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Create } from './containers';

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
            </Routes>
          </div>
        </Fragment>
      </div>
    </Router>
  );
}

export default App;
