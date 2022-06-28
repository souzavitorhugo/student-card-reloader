
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

/* Layouts */
import AppLayout from "./view/layouts/AppLayout";

/* Usuarios */
import PaginaUsuario from "./view/screens/Usuario/MainUsuario";
import Login from './view/screens/Home/login';

/* ESCOLAS */
import EscolasLista from "./view/screens/Escolas/List";

/* CARTOES */
import CartaoLista from "./view/screens/Cartao/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Fragment>
          <Route path="/" element={<Login />} />

          <Route path="/login" element={<Login />} />

          <Route path="/perfil" element={<PaginaUsuario />} />

          <Route path="/escolas">
            <Route index element={<EscolasLista />} />
          </Route>

          <Route path="/cartao">
            <Route index element={<CartaoLista />} />
          </Route>
          
        </Fragment>
      </Routes>
    </BrowserRouter >

  );
}

export default App;
