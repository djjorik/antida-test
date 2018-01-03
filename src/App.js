import React, { Component } from 'react';

import './App.css';
import { BrowserRouter } from 'react-router-dom';

import SearchPage from './SearchPage/SearchPage';



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <SearchPage />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
