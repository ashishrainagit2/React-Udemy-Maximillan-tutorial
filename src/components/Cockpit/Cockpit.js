import React , { useEffect, useRef , useContext } from 'react';
import styles from './Cockpit.module.css';
import AuthContext from '../../context/auth-context';

const cockpit  = (props) => {
    const toggleBtnRef = useRef(null);
    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);
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
            {/* <AuthContext.Consumer>
                {context => <button onClick={context.login}> Login </button>}
            </AuthContext.Consumer> */}
             <button onClick={authContext.login}> Login </button>
        </div>
    );
};
export default React.memo(cockpit);