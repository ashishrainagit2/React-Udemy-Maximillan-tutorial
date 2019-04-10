import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props =>  {

    const [personsState , setPersonsState] = useState({
      persons :  [
        { name: 'Max' , age : 28},
        { name: 'Manu' , age: 29},
        { name: 'Stephnei', age:  30 }
      ]
    });

    const [otherState , setOtherState ] = useState('some other value');

    console.log(personsState, otherState);

    const switchNameHandler = () => {
      //DONT DO THISthis.state.persons[0].name = 'Maximilian';
      setPersonsState ({
          persons :  [
            { name: 'Maximilian' , age : 28},
            { name: 'Manu' , age: 29},
            { name: 'Stephneii', age:  22 }
          ]
        })
    }

    return (
      <div className="App">
        <h1>Hi, I'm React App</h1>  
        <p>This is really working!</p>
        <button onClick={switchNameHandler}> Switch  Name </button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}> My Hobbies: Racing </Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className : 'App'} , React.createElement('h1', null , 'I am react app with difference') )

}

export default app;




