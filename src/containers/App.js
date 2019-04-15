import React, { Component } from 'react';
import styles from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

  nameChangeHandler = (event , id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
      const person = {
        ...this.state.persons[personIndex]
      };
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
    let persons = null;
    if(this.state.showPersons){
        persons = (
            <Persons 
              persons={this.state.persons}
              clicked={this.deletePersonHandler}
              changed={this.nameChangeHandler}/>
        );
    }
    return (
      <div className={styles.App}>
          <Cockpit 
            title={this.props.appTitle}
            showPersons={this.state.showPersons}
            persons={this.state.persons}
            clicked={this.togglePersonHandler}/>
          {persons}           
      </div>
    );
  }
}

export default App;
