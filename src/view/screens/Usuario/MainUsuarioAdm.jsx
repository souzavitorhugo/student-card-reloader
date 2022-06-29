import {Fragment} from "react"

import { Menu } from "../../components/GeneralComponents/main-navigation.jsx";
import TableUsuarios from "../../components/LoginComponent/table-usuarios.jsx"
import AddUser from "./AddUser"

export default function PaginaUsuarioAdm() {
    function iniciaCadastroUsuario() {
        let container = document.getElementById('container-adduser');

        container.classList.toggle('hidden')
    }

    return (
        <Fragment>
            <header>
                <Menu/>
            </header>

            <main id="pagUsuarioAdm">

                <div className="center-mid column container-usuarios py-5">

                    <div className="d-flex row space-between w-100 px-5">

                        <h1 style={{width: 'fit-content'}}> 
                            Usuários Cadastrados
                        </h1>

                        <button type="button" onClick={iniciaCadastroUsuario} className="btn btn-sm btn-primary" style={{maxWidth: 200 + 'px'}}>Adicionar Novo usuário</button>

                    </div>
                    

                    <TableUsuarios/>

                    <div id="formulario-cadastro" className="pt-5">

                        <div id="container-adduser"className="hidden mt-4">
                            <AddUser/>
                        </div>

                    </div>

                </div>
            </main>
        </Fragment>

        
    )
}
