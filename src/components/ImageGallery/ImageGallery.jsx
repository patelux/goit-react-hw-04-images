import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';

import 'styles/styles.css';

export function ImageGallery({ hits }) {
  return (
    <ul className="ImageGallery">
      {hits !== undefined &&
        hits.map ( ({ id, webformatURL, largeImageURL, tags }) => { return (
          <ImageGalleryItem
            key={id}
            image={webformatURL}
            largeImage={largeImageURL}
            tag={tags}
          />
        )})}
    </ul>
  );
}
