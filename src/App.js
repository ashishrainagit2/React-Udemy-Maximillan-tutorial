import React, { Component } from 'react';
import styles from './App.module.css';
import Person from './Person/Person';
import ErrorBoundary from './ErrorBoundary/ErrorBoundary';

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
    let persons = null;
    let btnClass = '';
    if(this.state.showPersons){
        persons = (
          <div>
            {this.state.persons.map((person , index) => {
              return <ErrorBoundary key={person.id}>
                <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age} 
                changed={(event) => this.nameChangeHandler(event , person.id)}/>
                </ErrorBoundary>
            })}
          </div> 
        );
        btnClass = styles.Red;
    }

    let classes = [ ]
    if(this.state.persons.length <= 2 ){
      classes.push(styles.red); //
    }
    if(this.state.persons.length <= 2 ){
      classes.push(styles.bold); //
    }
    return (
      <div className={styles.App}>
        <h1>Hi, I'm React App</h1>  
        <p className={classes.join(' ')}>This is really working!</p>
        <button 
          className={btnClass}
          onClick={this.togglePersonHandler}> Toggle Persons 
        </button>
          {persons}           
      </div>
    );
    //return React.createElement('div', {className : 'App'} , React.createElement('h1', null , 'I am react app with difference') )
  }
}

export default App;
