import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Helmet>
        <title>SHREE KRISHNA FABRICATION</title>
        <meta
      name="description"
      content="Shree Krishna Fabrication has been the best metal fabrication shop in Udhna, Surat for the last 15 years. We manufacture all types of Grill, Gates, Windows, Dadar, Parking shed, Roofing shed, Industrial shed, Ornamental grill, Shutter, Collapsible gate, Bed, Fencing, Kata-Tar Fencing and All metal M.S. and S.S. Fabrication works on labour and materials. Metal Fabricator in Udhna Surat"
    />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
     <link rel="canonical" href="https://shreekrishnafabrication.in/"></link>
      </Helmet>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
