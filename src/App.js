import React, { Component } from 'react';
import './App.css';
import Presentation from './components/Presentation';
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Presentation/>
        <AboutMe/>
        <Experience/>
      </div>
    );
  }
}

export default App;
