import React from 'react';
import  styles from './Person.module.css';

const person = (props) => {
    const rnd = Math.random();
    if(rnd > 0.1){
        throw new Error('Something Went Wrong');
    }
    return (
        <div className={styles.Person}>
            <p onClick={props.click}> I'm a {props.name} and I am {props.age} year old! </p>
            <p> {props.children}</p>
            <input type='text' onChange={props.changed} value={props.name}/>
        </div> 
    )
}

export default person ;
