import React from 'react';
import ReactDOM from 'react-dom/client';
import GifExpertApp from "./components/GifAppExpert";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <GifExpertApp/>
  </React.StrictMode>
);

