import React, { useState, useEffect } from "react";
import useStyles from "./ModalStyles";
import Modal from "./Modal";

const SimpleModal = ({ buttonLabel, children }) => {
  const classes = useStyles();
  const [showModal, setShowModal] = useState(false);

    useEffect(() => {
          setTimeout(() => {
            setShowModal(true)
          }, 3000);
    }, [])
  return (
    <div className={classes.wrapper}>
      {/* <button
        type="button"
        className={classes.modalButton}
      >
        {buttonLabel}
      </button> */}

      {showModal && (
        <Modal onCloseRequest={() => setShowModal(false)}>{children}</Modal>
      )}
    </div>
  );
};

export default SimpleModal;