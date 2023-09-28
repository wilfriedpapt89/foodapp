import { Fragment } from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const BackDrop = () => {
  return <div className={classes.backdrop} />;
};

const ModalContent = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const externalDiv = document.getElementById("overlays");

const Modal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(<BackDrop />, externalDiv)}
      {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        externalDiv
      )}
    </Fragment>
  );
};

export default Modal;
