import React from "react";

const Modal = (props) => {
  return (
    <div className="modal">
      <p>Are you sure?</p> <br />
      <button className="btn btn--alt" onClick={props.onCancel}>
        Cancel
      </button>
      <button className="btn" onClick={props.onCancel}>
        Confirm
      </button>
    </div>
  );
};

export default Modal;
