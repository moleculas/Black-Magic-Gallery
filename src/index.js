import React from 'react'
import ReactDOM from 'react-dom'
import App from './App.jsx'
import GalleryProvider from './context/GalleryProvider'


ReactDOM.render(
  <GalleryProvider>
    <App />
  </GalleryProvider>,
  document.getElementById('root')
);

