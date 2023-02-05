import React from 'react';

const ConfirmationModal = ({title,deletingDoctor,closeModal,successAction}) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
            <div className="modal-box">
                <h3 className="font-bold text-lg">{title}</h3>
                <p className="py-4">If You delete <span className='font-bold'>{deletingDoctor.name}</span> it can not be get back</p>
                <div className="modal-action">
                <label onClick={()=>successAction(deletingDoctor)} htmlFor="confirmation-modal" className="btn">Yes</label>
                <label onClick={closeModal} htmlFor="confirmation-modal" className="btn">Cancel</label>
                </div>
            </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;