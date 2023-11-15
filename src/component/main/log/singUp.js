import { useState } from "react";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import classes from "./singUp.module.css";
import WithClass from "../../../hoc/withClass/withClass";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";
import { logInWithGoogle, loginUser, signUpUser } from '../../../firebase/firebaseFunc'; // Import the functions


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessageMail, setErrorMessageMail] = useState('');
    const [errorMessagePass, setErrorMessagePass] = useState('');
    const [signFailedMessage, setSignFailedMessage] = useState('');
    const [logAction, setSignLogAction] = useState(false);

    const isValidEmail = (mail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\w+$/;
        return emailRegex.test(mail);
    };

    const navigate = useNavigate();

    const handleSignUp = async () => {
        setErrorMessageMail('');
        setErrorMessagePass('');
        setSignFailedMessage('');

        if (isValidEmail(email)) {
          if (password.length >= 8) {
            try {
              await signUpUser(email, password).then(() => {
                navigate('/');
              });
            } catch (error) {
              setSignFailedMessage(error.message);
            }
          } else {
            setErrorMessagePass("Password needs to be more than 8 characters");
          }
        } else {
          setErrorMessageMail("Invalid email");
        }
      };


    const handleLogin = async () => {
        setErrorMessageMail('');
        setErrorMessagePass('');
        setSignFailedMessage('');

        if (isValidEmail(email)) {
          if (password.length >= 8) {
            try {
              await loginUser(email, password);
              navigate('/');
            } catch (error) {
              setSignFailedMessage(error.message);
            }
          } else {
            setErrorMessagePass("Password needs to be more than 8 characters");
          }
        } else {
          setErrorMessageMail("Invalid email");
        }
      };

      const googleLogIn = () => {
        logInWithGoogle().then(() => {
            navigate('/')
        });
      };

    return (
        <Aux>
            <Form className={classes.logForm}>
                <h1 className={classes.logTitle}>{logAction? "Log in" : "Sign up"}</h1>
                <label>
                    <Form.Group className="mb-3" controlId="formBasicEmail" >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
                        <p className={classes.logP}>
                            We'll never share your email with anyone else.
                        </p>
                        <p className={classes.errorMessage}>{errorMessageMail}</p>
                    </Form.Group>
                </label>

                <label>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                        <p className={classes.errorMessage}>{errorMessagePass}</p>
                    </Form.Group>
                </label>
                <div className={classes.logButtonDiv}>
                    <Button variant="primary" onClick={logAction === true ? handleLogin : handleSignUp} disabled={!isValidEmail(email) || password.length < 8}>
                    {logAction? "Log in" : "Sign up"}
                    </Button>

                    <Button variant="danger" onClick={googleLogIn}>
                    Log in With GOOGLE
                    </Button>
                </div>
                <p className={classes.errorMessage}>{signFailedMessage}</p>
                <li className={classes.changeLogLi} onClick={() => setSignLogAction(logAction === true ? false : true)}>{logAction === false ? "Already have account ?" : "don't have account yet?"}</li>
            </Form>
        </Aux>
    );
};

export default WithClass(SignUp, classes.SignUp);