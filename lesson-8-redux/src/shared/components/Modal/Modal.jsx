import React, { Component } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (evt) => {
    // console.log(evt.code);
    if (evt.code === "Escape") {
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
  }

  render() {
    if (!this.props.open) {
      return null;
    }

    return createPortal(
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
          <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div className="sm:flex flex-column sm:items-start">
                {this.props.children}
                <button
                  onClick={this.props.onClose}
                  type="button"
                  className="bg-red-500 px-2 py-2 text-white"
                >
                  Крестик
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;
