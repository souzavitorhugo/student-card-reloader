
import { Fragment } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

/* Usuarios */
import PaginaUsuario from "./view/screens/Usuario/MainUsuarioPadrao";
import PaginaUsuarioAdm from "./view/screens/Usuario/MainUsuarioAdm";
import EditUser from "./view/screens/Usuario/EditUser";
import Login from './view/screens/Home/login';

/* ESCOLAS */
import EscolasLista from "./view/screens/Escolas/List";

/* ALUNOS */
import ListaAlunos from "./view/screens/Alunos/list";

/* CARTOES */
import CartaoLista from "./view/screens/Cartao/List";

import {useUsuario} from './context/usuario'


function App() {
  const { isLogged } = useUsuario();
  const { isAdm } = useUsuario();

  return (
    <BrowserRouter>
      <Routes>          
          {isLogged ? ( 
            <Fragment> 
              {isAdm ? (
                <Fragment> 
                  <Route path="/">
                    <Route index element={<PaginaUsuarioAdm />} />
                  </Route>

                  <Route path="/alunos">
                    <Route index element={<ListaAlunos/>} />
                  </Route>

                  <Route path="/escolas">
                    <Route index element={<EscolasLista/>} />
                  </Route>

                  <Route path="/cartao">
                    <Route index element={<CartaoLista/>} />
                  </Route>

                  <Route path="/edit/:id">
                    <Route index element={<EditUser/>} />
                  </Route>
                </Fragment>

              ) : (
                <Route index element={<PaginaUsuario/>} />
              )}
            </Fragment>
          ) : (
            <Route index element={<Login/>}/>
          )}
      </Routes>
    </BrowserRouter >

  );
}

export default App;
