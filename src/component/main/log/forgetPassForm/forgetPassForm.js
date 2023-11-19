import Form from 'react-bootstrap/Form';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';
import classes from './forgetPassForm.module.css';
import { Button } from 'react-bootstrap';

const ForgetPassForm = (props) => {

  return (
    <Aux>
      <Form className={classes.logForm}>
        <h1 className={classes.logTitle}>Reset Password</h1>
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
          <li className={classes.changeLogLi} onClick={() => props.setForgetPass(false)}>I remember my password </li>
        </Form.Group>

        <Button variant='warning' className={classes.ForgetButton} onClick={props.sendResetPassMail} 
        disabled={!props.isValidEmail(props.email)}>
            Send me email
          </Button>

          <p>
            {props.errorMessagePass}
          </p>
      </Form>

    </Aux>
  );
};

export default ForgetPassForm;