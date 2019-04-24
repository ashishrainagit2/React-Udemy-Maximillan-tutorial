import React , { useEffect, useRef } from 'react';
import styles from './Cockpit.module.css';

const cockpit  = (props) => {
    const toggleBtnRef = useRef(null);
    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        //Http Request ...
        // const timer = setTimeout(() => {
        //     alert('saved data to cloud!!');
        // } , 1000);
        toggleBtnRef.current.click();
        return() => {
            //clearTimeout(timer);
            console.log('[Cockpit.js] Cleanup work in useEffect');
        };
    } , []);

    useEffect(() => {
            console.log('[Cockpit.js] 2nd use effect');
            return () => {
                console.log('[Cockpit.js] Cleanup work in 2nd  useEffect');
            };
        });

    const classes = [ ];
    let btnClass = '';
    if(props.showPersons){
        btnClass = styles.Red
    }
    if(props.personsLength <= 2 ){
      classes.push(styles.red); //
    }
    if(props.personsLength <= 2 ){
      classes.push(styles.bold); //
    }
    return(
        <div className={styles.Cockpit}>
            <h1>{props.title}</h1>  
            <p className={classes.join(' ')}>This is really working!</p>
            <button 
            ref={toggleBtnRef}
            className={btnClass}
            onClick={props.clicked}> Toggle Persons 
            </button>
        </div>
    );
};
export default React.memo(cockpit);