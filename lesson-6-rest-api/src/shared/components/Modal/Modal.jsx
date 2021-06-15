import React, { Component, createRef } from "react";
import { createPortal } from "react-dom";
import {
  clearAllBodyScrollLocks,
  disableBodyScroll,
  enableBodyScroll,
} from "body-scroll-lock";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  ref = createRef();

  static propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidUpdate(prevProps, prevState) {
    if (this.ref.current) {
      console.log(this.ref.current, 'ref', 'work')
      if (this.props.open) {
        window.addEventListener("keydown", this.handleKeyDown);
        disableBodyScroll(this.ref.current);
      } else {
        console.log('work')
        window.removeEventListener("keydown", this.handleKeyDown);
        enableBodyScroll(this.ref.current);
      }
    }
  }

  handleKeyDown = (evt) => {
    // console.log(evt.code);
    if (evt.key === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdrop = (evt) => {
    // if (evt.target === evt.currentTarget) {
    console.log(evt.target);
    console.log(evt.currentTarget);
    this.props.onClose();
    // }
  };

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
    clearAllBodyScrollLocks();
  }

  render() {
    return createPortal(
      this.props.open ? (
        <div
          className="fixed z-10 inset-0 overflow-y-auto"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div
              className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
              aria-hidden="true"
              onClick={this.handleBackdrop}
            />

            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <div  ref={this.ref} className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
              <button
                  onClick={this.props.onClose}
                  type="button"
                  className="bg-red-500 px-2 py-2 text-white"
              >
                Крестик
              </button>
              <div
                className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
              >
                <div className="sm:flex flex-column sm:items-start">
                  {this.props.children}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null,
      modalRoot
    );
  }
}

export default Modal;
