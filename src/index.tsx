import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/allCss.css';
import App from './App';

import {AuthProvider} from './context/Auth'
import {UsuarioProvider} from './context/usuario'

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <AuthProvider>
      <UsuarioProvider>
        <App />
      </UsuarioProvider>
    </AuthProvider>
  </React.StrictMode>
);

