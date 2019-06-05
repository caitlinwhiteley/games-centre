import React from "react";
import "./modal.css";
import "./noughtsAndCrosses.css";

const Modal = ({ children, closeModal, show }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="button-noughts" onClick={() => closeModal()}>
          New Game
        </button>
      </section>
    </div>
  );
};

export default Modal;
