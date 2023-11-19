import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  logInWithGoogle,
  loginUser,
  resetPasswordMail,
  signUpUser,
} from "../../../firebase/firebaseFunc";
import Aux from "../../../hoc/Auxiliary/Auxiliary";
import WithClass from "../../../hoc/withClass/withClass";
import classes from "./singUp.module.css";
import LogForm from "./logForms/logForm";
import ForgetPassForm from "./forgetPassForm/forgetPassForm";
import ModalPopUp from "../../UI/modal/modal";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessageMail, setErrorMessageMail] = useState("");
  const [errorMessagePass, setErrorMessagePass] = useState("");
  const [signFailedMessage, setSignFailedMessage] = useState("");
  const [logAction, setSignLogAction] = useState(true);
  const [forgetPass, setForgetPass] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [modalText, setModalText] = useState('');

  const isValidEmail = (mail) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+\w+$/;
    return emailRegex.test(mail);
  };

  const navigate = useNavigate();

  const handleAuthentication = async () => {
    setErrorMessageMail("");
    setErrorMessagePass("");
    setSignFailedMessage("");

    if (!isValidEmail(email)) {
      setErrorMessageMail("Invalid email");
      return;
    }

    if (password.length < 8) {
      setErrorMessagePass("Password needs to be more than 8 characters");
      return;
    }

    try {
      if (logAction) {
        await signUpUser(email, password);
      } else {
        await loginUser(email, password);
      }
      navigate("/");
    } catch (error) {
      setSignFailedMessage(error.message);
    }
  };

  const googleLogIn = async () => {
    try {
      await logInWithGoogle();
      navigate("/");
    } catch (error) {
      setModalShow(true);
      setModalText("Google Login Failed");
    }
  };

  const sendResetPassMail = async () => {
    try {
      await resetPasswordMail(email);
      setModalShow(true);
      setModalText("Email sent, change your password and return to log in, if you didn't get email make sure you sign up before change password or you did'nt type correct the email");
    } catch (error) {
        setModalShow(true);
        setModalText('failed to send rest password mail check your internet connection or try sign up');
    }
  }

  const logForm = (
    <LogForm
      logAction={logAction}
      loginUser={loginUser}
      signUpUser={signUpUser}
      logInWithGoogle={logInWithGoogle}
      googleLogIn={googleLogIn}
      handleAuthentication={handleAuthentication}
      email={email}
      errorMessageMail={errorMessageMail}
      errorMessagePass={errorMessagePass}
      signFailedMessage={signFailedMessage}
      setEmail={setEmail}
      password={password}
      setPassword={setPassword}
      setSignLogAction={setSignLogAction}
      isValidEmail={isValidEmail}
      setForgetPass={setForgetPass}
    />
  );

  const forgetPassForm =
      <ForgetPassForm
      email={email}
      setEmail={setEmail}
      isValidEmail={isValidEmail}
      setForgetPass={setForgetPass}
      sendResetPassMail={sendResetPassMail}
      errorMessagePass={errorMessagePass}
      />;

      const modal = () => {
        return(
          modalText!== '' ? <ModalPopUp modalShow={modalShow} modalText={modalText} setModalText={setModalText}></ModalPopUp> : undefined

        )
      }

  return (

  <Aux>

    {forgetPass === false ? logForm : forgetPassForm}
    {modal()}
    </Aux>
  
  );
};

export default WithClass(SignUp, classes.SignUp);
