import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

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
