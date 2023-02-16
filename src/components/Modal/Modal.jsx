import PropTypes from 'prop-types';
import 'styles/styles.css';
import { Component } from 'react';
import { createPortal } from 'react-dom';

export class Modal extends Component {
пше
  onEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
    this.props.closeModal();
}
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onEscape);

  
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onEscape);

  }

  render() {
    const { id, largeImage, tag } = this.props;

    return createPortal(
      <div className="Overlay" >
        <div className="Modal" key={id}>
          <img src={largeImage} alt={tag} onClick={this.handleBackdropClick}/>
        </div>
      </div>,
      document.querySelector('#modal')
    );
  }
}

Modal.propTypes = {
  id: PropTypes.string,
  largeImage: PropTypes.string,
  tag: PropTypes.string,
  closeModal: PropTypes.func,
};
