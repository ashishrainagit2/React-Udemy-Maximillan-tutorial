import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons :  [
      { name: 'Max' , age : 28},
      { name: 'Manu' , age: 29},
      { name: 'Stephnei', age:  30 }
    ],
    otherState : 'some other value'
  }

  switchNameHandler = (newName) => {
    //DONT DO THISthis.state.persons[0].name = 'Maximilian';
      this.setState ({
        persons :  [
          { name: newName , age : 28},
          { name: 'Manu' , age: 29},
          { name: 'Stephneii', age:  22 }
        ]
      })
  }

  render() {
    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>  
        <p>This is really working!</p>
        <button onClick={() => this.switchNameHandler('Maximilian!!!')}> Switch  Name </button>
        <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age}/>

        <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Max!!!')}> My Hobbies: Racing </Person>
        <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className : 'App'} , React.createElement('h1', null , 'I am react app with difference') )
  }
}

export default App;
