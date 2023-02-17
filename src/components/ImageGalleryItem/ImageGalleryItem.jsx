import { useState } from 'react';
import PropTypes from 'prop-types';
import 'styles/styles.css';

import { Modal } from 'components/Modal/Modal';


export function ImageGalleryItem ({ id, image, largeImage, tag }) {

const [isOpenModal, setIsOpenModal] = useState(false);

const handlerToggleModal = () => {
  setIsOpenModal(prevState => !prevState);
};

    return (
      <li className="ImageGalleryItem" >
        <img className='ImageGalleryItem-image' onClick={handlerToggleModal} src={image} alt={tag} />
        {isOpenModal && (
          <Modal tag={tag} largeImage={largeImage} closeModal={handlerToggleModal} />
        )}
      </li>
    );
  }


ImageGalleryItem.propTypes = {
  image: PropTypes.string.isRequired,
  largeImage: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
};