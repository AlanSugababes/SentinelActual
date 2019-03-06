import React, { Component } from 'react';
import './css/Upload.css';
import './css/App.css';
import NavBar from './js/NavBar.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Sentinel</h1>
        <NavBar/>
      </div>
    );
  }
}

export default App;
