import React , { PureComponent } from 'react';
import Person from './Person/Person';

class  Persons extends PureComponent   {

  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state ;
  // }

  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps' , props);
  // }

  // componentWillUpdate(){

  // }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate ')
  //   if(nextProps.persons !== this.props.persons){
  //     return true ;
  //   } else {
  //     return false ;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'SnapShot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate');
    console.log(snapshot);
  }

  componentWillUnmount(){
    console.log('[Persons.js] ComponentWillUnmount');
  }

  render (){
    console.log('[Persons.js rendering ...]');
    return this.props.persons.map((person , index) => {
      return (<Person
        key={person.id}
        click={() => this.props.clicked(index)}
        name={person.name}
        age={person.age} 
        changed={(event) => this.props.changed(event , person.id)}/>
      );
      })
  }
}

export default Persons;