import React , {Component } from 'react';
import  styles from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';

class Person extends Component {
    render(){
        console.log('[Person.js rendering ...]');
        return (
            <Aux>
                    <p onClick={this.props.click}> I'm a {this.props.name} and I am {this.props.age} year old! </p>
                    <p> {this.props.children}</p>
                    <input 
                        type='text' 
                        onChange={this.props.changed} 
                        value={this.props.name}
                    />
            </Aux>
        );
    } 
}

export default withClass(Person , styles.Person) ;
