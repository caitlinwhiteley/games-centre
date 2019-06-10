import React from "react";
import "./modal.css";

const Modal = ({ children, closeModal, show, buttonValue, bgdColor }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName} style={{ backgroundColor: bgdColor }}>
      <section className="modal-main">
        {children}
        <button className="button-noughts" onClick={() => closeModal()}>
          {buttonValue}
        </button>
      </section>
    </div>
  );
};

export default Modal;
