import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './style.scss';

const App = (await import('./App')).default

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
