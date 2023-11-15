import React from 'react';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './navBar.module.css';
import WithClass from '../../../hoc/withClass/withClass';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGamepad } from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navTo = useNavigate();
    
    const navToLog = () => {
        // Use history.push to navigate to a new route
        navTo('/log');
      };

    return (
        <Aux>
            <ul>
                <li><FontAwesomeIcon icon={faGamepad} className={classes.MainIcon}/></li>
                <li><Button className={classes.logButton} onClick={navToLog}>Log in/Sign up</Button></li>
            </ul>
        </Aux>
    );
  };

  export default WithClass(NavBar,classes.NavBar);