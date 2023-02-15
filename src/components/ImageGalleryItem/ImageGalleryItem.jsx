import { Component } from 'react';
import PropTypes from 'prop-types';
import 'styles/styles.css';

import { Modal } from 'components/Modal/Modal';


export class ImageGalleryItem extends Component {
  state = {
    isOpenModal: false,
  };

  handlerToggleModal = e => {
    this.setState(prevState => ({ isOpenModal: !prevState.isOpenModal }));
  };

  render() {
    const {  image, largeImage, tag } = this.props;

    return (
      <li className="ImageGalleryItem" onClick={this.handlerToggleModal}>
        <img className='ImageGalleryItem-image' src={image} alt={tag} />
        {this.state.isOpenModal && (
          <Modal largeImage={largeImage} closeModal={this.handlerToggleModal} />
        )}
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};