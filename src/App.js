import React, { Component } from 'react';
import './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons :  [
      { id:'321erer' , name: 'Max' , age : 28},
      { id:'345tyg', name: 'Manu' , age: 29},
      { id:'gfdt345', name: 'Stephnei', age:  30 }
    ],
    otherState : 'some other value',
    showPersons : false
  }

  // switchNameHandler = (newName) => {
  //   //DONT DO THISthis.state.persons[0].name = 'Maximilian';
  //     this.setState ({
  //       persons :  [
  //         { name: newName , age : 28},
  //         { name: 'Manu' , age: 29},
  //         { name: 'Stephneii', age:  22 }
  //       ]
  //     })
  // }

  nameChangeHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

      const person = {
        ...this.state.persons[personIndex]
      };

      // const person = Object.assign({} , this.state.persons[personIndex]);

      person.name = event.target.value;

      const persons = [...this.state.persons];
      persons[personIndex] = person;

      this.setState ({ persons : persons });
  }

  deletePersonHandler = (personIndex) => {
      // const persons = this.state.persons;
      // const persons = this.state.persons.slice();
      const persons = [...this.state.persons];
      persons.splice(personIndex , 1);
      this.setState({persons:persons});
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPersons;
      this.setState ({
        showPersons : !doesShow
      })
  }

  render() {
    const style = {
      backgroundColor : 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding : '8px',
      cursor: 'pointer',
      ':hover': {
        backgroundColor : 'lightgreen',
        color:'black'
      }
    };

    let persons = null;
    if(this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person , index) => {
              return <Person
                key={person.id}
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} 
                changed={(event) => this.nameChangeHandler(event , person.id)}/>
            })}
          </div> 
        );

        style.backgroundColor = 'red';
        style[':hover'] = {
          backgroundColor : 'salmon',
          color:'black'
        }
    }

    const classes = [ ];
    if(this.state.persons.length <= 2 ){
      classes.push('red'); 
    }
    if(this.state.persons.length <= 1 ){
      classes.push('bold'); 
    }
    return (
      <StyleRoot>
      <div className="App">
        <h1>Hi, I'm React App</h1>  
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          style={style} onClick={this.togglePersonHandler}> Toggle Persons 
        </button>
          {persons}           
      </div>
      </StyleRoot>
    );
    //return React.createElement('div', {className : 'App'} , React.createElement('h1', null , 'I am react app with difference') )
  }
}

export default Radium(App);
