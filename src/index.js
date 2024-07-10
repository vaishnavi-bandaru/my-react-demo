import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {RouterProvider} from "react-router-dom";
import getBrowserRouter from './components/MyRouter/MyBrowserRouter';

const router = getBrowserRouter()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
        <App />
    </React.StrictMode>
);
