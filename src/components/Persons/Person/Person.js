import React , {Component } from 'react';
import  styles from './Person.module.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component {
    constructor(){
        super();
        this.inputElementRef  = React.createRef();
    }
    componentDidMount(){
        // this.inputElement.focus();
        this.inputElementRef.current.focus();
    }
    render(){
        console.log('[Person.js rendering ...]');
        return (
            <Aux>
                    <p key="i1" onClick={this.props.click}> I'm a {this.props.name} and I am {this.props.age} year old! </p>
                    <p key="i2"> {this.props.children}</p>
                    <input 
                        key = "i3"
                        type='text' 
                        ref={this.inputElementRef}
                        // ref={(inputEl) => {this.inputElement = inputEl}}
                        onChange={this.props.changed} 
                        value={this.props.name}
                    />
            </Aux>
        );
    } 
}

Person.propTypes = {
    click : PropTypes.func ,
    name  : PropTypes.string ,
    age : PropTypes.number,
    changed : PropTypes.func 
};

export default withClass(Person , styles.Person) ;
