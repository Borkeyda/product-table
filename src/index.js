import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './component/App';
import productList from './ProductsAPI';
import { electronicsList, sportsList } from './assets/filteredByCategories';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
