import React from "react";
import { createPortal } from "react-dom";

function ModalAddBook({ children, show, onClose }) {
  console.log(show);
  if (!show) return null;
  return createPortal(
    <div
      className="modal"
      tabIndex="-1"
      style={{ display: "block", height: "70vh" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Book Form</h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
              onClick={() => onClose()}
            ></button>
          </div>
          <div className="modal-body">{children}</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default ModalAddBook;
