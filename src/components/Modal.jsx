import React from 'react'

const Modal = ({ isOpen, onClose, message, imageSrc }) => {
  if (!isOpen) return null;

  return (
    <div className="container__modal">
      <div className="modal">
        <div className='modalImg'>
          <img src={imageSrc} alt="warning image" />
        </div>
        <p>{message}</p>
        <button className='custom-btn btn-1' onClick={onClose} aria-label="Cerrar modal">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal