import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { ImgProvider } from 'Context/SearchImgContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ImgProvider>
      <App />
    </ImgProvider>
  </React.StrictMode>
);
