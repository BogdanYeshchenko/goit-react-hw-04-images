import { createContext, useContext, useState } from 'react';

const ImgContext = createContext(null);

export const ImgProvider = ({ children }) => {
  const [searchWord, setSearchWord] = useState('');
  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [totalHits, setTotalHits] = useState(0);
  const [largeimage, setLargeimage] = useState('');
  const [tags, setTags] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLoding, setIsLoding] = useState(false);

  const appointSearchWord = value => {
    setSearchWord(value);
  };

  const appointPage = value => {
    setPage(value);
  };

  const addPageWithPrev = value => {
    setPage(prev => prev + value);
  };

  const appointData = value => {
    setData(value);
  };

  const addDataWithPrev = value => {
    setData(prev => [...prev, ...value]);
  };

  const appointTotalHits = value => {
    setTotalHits(value);
  };

  const appointLargeimage = value => {
    setLargeimage(value);
  };

  const appointTags = value => {
    setTags(value);
  };

  const appointIsModalOpen = value => {
    console.log(111111111111111111, value);
    setIsModalOpen(value);
  };

  const appointIsLoding = value => {
    setIsLoding(value);
  };

  return (
    <ImgContext.Provider
      value={{
        searchWord,
        page,
        data,
        totalHits,
        largeimage,
        tags,
        isModalOpen,
        isLoding,
        appointSearchWord,
        appointPage,
        addPageWithPrev,
        appointData,
        addDataWithPrev,
        appointTotalHits,
        appointLargeimage,
        appointTags,
        appointIsModalOpen,
        appointIsLoding,
      }}
    >
      {children}
    </ImgContext.Provider>
  );
};

export const useImg = () => useContext(ImgContext);
