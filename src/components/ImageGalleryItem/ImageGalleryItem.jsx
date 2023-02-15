import 'styles/styles.css';

import { Modal } from 'components/Modal/Modal';
import { Component } from 'react';

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
