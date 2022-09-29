// ! FILES
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './styles/normalize.css';
import './styles/global.css';
import CocktailProvider from './context';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Wrapping the App component by the Context Provider */}
    <CocktailProvider>
      <App />
    </CocktailProvider>
  </React.StrictMode>
);
