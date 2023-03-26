import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeController from './Pages/Home/HomeController';
import reportWebVitals from "./reportWebVitals";
ReactDOM.render(
    <React.StrictMode>
        <HomeController />
    </React.StrictMode>,
    document.getElementById('root')
);
reportWebVitals()