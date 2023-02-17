import PropTypes from 'prop-types';
import 'styles/styles.css';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';

export function Modal ({ closeModal, largeImage, tag }) {
  
  const onEscape = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
    closeModal();
}
  };

  useEffect(() => {
    window.addEventListener('keydown', onEscape);
    return () => {
      window.removeEventListener('keydown', onEscape);
    };
  }, [closeModal]);
  
      return createPortal(
      <div className="Overlay" onClick={handleBackdropClick}>
        <div className="Modal">
          <img src={largeImage} alt={tag}  />
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }


Modal.propTypes = {
  id: PropTypes.string,
  largeImage: PropTypes.string,
  tag: PropTypes.string,
  closeModal: PropTypes.func,
};
