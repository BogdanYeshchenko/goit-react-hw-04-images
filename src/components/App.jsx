import { useEffect } from 'react';
import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';

import { searchData } from '../service/SearchData/SearchData';
import { useImg } from 'Context/SearchImgContext';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = () => {
  const {
    searchWord,
    page,
    data,
    totalHits,
    largeimage,
    tags,
    isModalOpen,
    isLoding,
    addPageWithPrev,
    addDataWithPrev,
    appointIsLoding,
    appointTotalHits,
  } = useImg();

  useEffect(() => {
    const downloadImgBySubmit = async () => {
      try {
        appointIsLoding(true);
        const answer = await searchData(searchWord, page);
        const answerJson = await answer.json();

        appointTotalHits(Math.ceil(answerJson.totalHits / 12));
        addDataWithPrev(answerJson.hits);

        if (answerJson.totalHits === 0) {
          toast.warn('Do not faund any images', {
            theme: 'dark',
          });
        }

        if (answerJson.totalHits > 0 && page === 1) {
          toast.info(`You faund ${answerJson.totalHits} images`, {
            theme: 'dark',
          });
        }

        if (totalHits === page) {
          toast.warn('It is last images', {
            theme: 'dark',
          });
        }
      } catch (error) {
        toast.error(error.message);
        console.error(error.message);
      } finally {
        appointIsLoding(false);
      }
    };

    if (searchWord) {
      downloadImgBySubmit();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, searchWord]);

  const handleLoadMore = () => {
    addPageWithPrev(1);
  };

  return (
    <div>
      {isModalOpen && <Modal largeimage={largeimage} tags={tags} />}
      <Searchbar />
      {data && <ImageGallery data={data} />}
      {isLoding && <Loader />}

      {page < totalHits && data.length > 0 && (
        <Button handleLoadMore={handleLoadMore} />
      )}

      <ToastContainer />
    </div>
  );
};
