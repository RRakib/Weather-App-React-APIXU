import React, { Component } from 'react';
import TopContainer from "./Components/Top/TopContainer.jsx";
import BottomContainer from "./Components/Bottom/BottomContainer.jsx";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <TopContainer />
        <BottomContainer />
      </div>
    );
  }
}

export default App;
