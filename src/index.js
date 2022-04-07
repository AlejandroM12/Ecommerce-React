import React from 'react';
import ReactDOM from 'react-dom';
import { getFirestoreApp } from './firebase/config';
import App from './routes/App';

getFirestoreApp();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


