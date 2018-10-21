import React, { Component } from 'react';
import './App.css';
import Presentation from './components/Presentation';
import AboutMe from "./components/AboutMe";
import Experience from "./components/Experience";
import Education from "./components/Education";
import Skills from "./components/Skills";
import RecentWork from "./components/RecentWork";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
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
        <Contact/>
        <Footer/>
      </div>
    );
  }
}

export default App;
