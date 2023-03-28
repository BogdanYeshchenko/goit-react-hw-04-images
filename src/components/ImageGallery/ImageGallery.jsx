import './ImageGallery.css';
import PropTypes from 'prop-types';
import { useImg } from 'Context/SearchImgContext';

export const ImageGallery = ({ data }) => {
  const { appointIsModalOpen, appointLargeimage, appointTags } = useImg();

  const hendleClickToImage = e => {
    appointIsModalOpen(true);
    appointLargeimage(e.target.dataset.largeimage);
    appointTags(e.target.dataset.tags);
  };

  return (
    <>
      <ul className="ImageGallery ">
        {data.map(el => (
          <li key={el.id} className="ImageGalleryItem">
            <img
              onClick={hendleClickToImage}
              className="ImageGalleryItem-image"
              src={el.webformatURL}
              alt={el.tags}
              data-largeimage={el.largeImageURL}
              data-tags={el.tags}
            />
          </li>
        ))}
      </ul>
    </>
  );
};

ImageGallery.propTypes = {
  data: PropTypes.array.isRequired,
};
