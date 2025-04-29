import React from 'react';
import classes from './Model.module.css';

function Modal(children) {
  <>
    <div className={classes.backdrop} />
    <dialog className={classes.modal}>{children}</dialog>
  </>;
}

export default Modal;
