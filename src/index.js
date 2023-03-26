import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HomeController from './Pages/Home/HomeController';
//Importa o store
import store from './store/store';
//Importa o Provider do React Redux
import { Provider } from 'react-redux';
ReactDOM.render(
    <React.StrictMode>
        {/* Adicionar o Provider com o store importado*/}
        <Provider store={store}>
            <HomeController />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);