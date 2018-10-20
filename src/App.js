import React, { Component } from 'react';
import './App.css';
import Presentation from './components/Presentation';
import AboutMe from "./components/AboutMe";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Presentation/>
        <AboutMe/>
      </div>
    );
  }
}

export default App;
