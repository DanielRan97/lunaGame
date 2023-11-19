import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import classes from './logForm.module.css';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';

const LogForm = (props) => {

  return (
    <Aux>
      <Form className={classes.logForm}>
        <h1 className={classes.logTitle}>{props.logAction === false ? 'Log in' : 'Sign up'}</h1>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={props.email}
            onChange={(e) => props.setEmail(e.target.value)}
          />
          <p className={classes.logP}>We'll never share your email with anyone else.</p>
          <p className={classes.errorMessage}>{props.errorMessageMail}</p>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={props.password}
            onChange={(e) => props.setPassword(e.target.value)}
          />
          <p className={classes.errorMessage}>{props.errorMessagePass}</p>
          <li className={classes.changeLogLi} onClick={() => props.setForgetPass(true)}>I don't remember my password </li>
        </Form.Group>
        <div className={classes.logButtonDiv}>
          <Button
            variant="primary"
            onClick={props.handleAuthentication}
            disabled={!props.isValidEmail(props.email) || props.password.length < 8}
          >
            {!props.logAction ? 'Log in' : 'Sign  up'}
          </Button>
          <Button variant="danger" onClick={props.googleLogIn}>
            Log in With Google
          </Button>
        </div>
        <p className={classes.errorMessage}>{props.signFailedMessage}</p>
        <li className={classes.changeLogLi} onClick={() => props.setSignLogAction(!props.logAction)}>
          {props.logAction === true ? 'Already have an account?' : "Don't have an account yet?"}
        </li>
      </Form>
    </Aux>
  );
};

export default LogForm;