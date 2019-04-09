import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>  
        <p>This is really working!</p>
        <Person />
      </div>
    );
    //return React.createElement('div', {className : 'App'} , React.createElement('h1', null , 'I am react app with difference') )
  }
}

export default App;
