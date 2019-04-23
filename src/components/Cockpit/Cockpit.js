import React , { useEffect } from 'react';
import styles from './Cockpit.module.css';

const cockpit  = (props) => {
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http Request ...
        setTimeout(() => {
            alert('saved data to cloud!!');
        } , 1000);
    } , []);
    const classes = [ ];
    let btnClass = '';
    if(props.showPersons){
        btnClass = styles.Red
    }
    if(props.persons.length <= 2 ){
      classes.push(styles.red); //
    }
    if(props.persons.length <= 2 ){
      classes.push(styles.bold); //
    }
    return(
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>  
            <p className={classes.join(' ')}>This is really working!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}> Toggle Persons 
            </button>
        </div>
    );
};
export default cockpit;