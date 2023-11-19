import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Aux from '../../../hoc/Auxiliary/Auxiliary';
import classes from './modal.module.css'

const ModalPopUp = (props) => {

  return(
    <Aux>

    <Modal
      className={classes.ModalPopUp}
      size="sm"
      show={props.modalShow}
      onHide={() => props.setModalText('')}
      aria-labelledby="example-modal-sizes-title-sm"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-sm">
        Please pay attention
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>{props.modalText}</Modal.Body>
      <Button onClick={() => props.setModalText('')} className={classes.ModalPopUpButton}>
      OK
    </Button>
    </Modal>
  </Aux>
  )
};

export default ModalPopUp;