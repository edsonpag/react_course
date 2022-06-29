import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { UserProvider } from "./context/user";

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <UserProvider>
        <App />
    </UserProvider>
);
