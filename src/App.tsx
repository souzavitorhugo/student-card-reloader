
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from "./view/AppLayout";

import Login from './view/login';
import Home from './view/home';
import Perfil from './view/perfil';
import Recarga from './view/recarga';

/* ESCOLAS */
import EscolasLista from "./screens/Escolas/List";

/* ALUNOS */
import AlunosLista from "./screens/Alunos/List";

/* CARTOES */
import CartaoLista from "./screens/Cartao/List";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Fragment>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/perfil" element={<Perfil />} />
          <Route path="/recarga" element={<Recarga />} />
          <Route path="/escolas">
            <Route index element={<EscolasLista />} />
          </Route>
          <Route path="/alunos">
            <Route index element={<AlunosLista />} />
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
