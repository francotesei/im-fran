import React, { Component } from 'react';
import './App.css';
import Presentation from './components/Presentation';
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import RecentWork from "./components/RecentWork";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Presentation/>
        <AboutMe/>
        <Education/>
        <Experience/>
        <Skills/>
        <RecentWork/>
      </div>
    );
  }
}

export default App;
