import React from "react";
import "./deleteConfirmationModal.css";

const DeleteConfirmationModal = ({ onCancel, onConfirm }) => {
    return (
        <div className="DeleteConfirmationModal">
            <div className="DeleteConfirmationModalDiv">
                <p>Are you sure you want to delete this product?</p>
                <div className="DeleteConfirmationModalButtonsDiv">
                    <button className="DeleteConfirmationModalBtn DeleteConfirmationModalBtnCancel" nClick={onCancel}>Cancel</button>
                    <button className="DeleteConfirmationModalBtn DeleteConfirmationModalBtnConfirm" onClick={onConfirm}>Confirm</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmationModal;
