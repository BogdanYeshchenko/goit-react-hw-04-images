import css from './Modal.module.css';
import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useImg } from 'Context/SearchImgContext';

export const Modal = ({ largeimage, tags }) => {
  const { appointIsModalOpen } = useImg();

  const handlePressKeybord = e => {
    if (e.code === 'Escape') {
      appointIsModalOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handlePressKeybord);

    return () => {
      document.removeEventListener('keydown', handlePressKeybord);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleClicOnBackDrop = e => {
    if (e.target === e.currentTarget) {
      appointIsModalOpen(false);
    }
  };

  return (
    <div
      className={css.overlay}
      onClick={handleClicOnBackDrop}
      data-backdrop="true"
    >
      <div className={css.modal}>
        <img className={css.modalImg} src={largeimage} alt={tags} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeimage: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
};
