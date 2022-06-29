import { Menu } from "../../components/GeneralComponents/main-navigation.jsx";
import TableUsuarios from "../../components/LoginComponent/table-usuarios.jsx"
import AddUser from "./AddUser"
import {Fragment} from "react"

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

                    <h1 className=""> 
                        Usuários Cadastrados
                    </h1>

                    <TableUsuarios/>

                    <div id="formulario-cadastro" className="pt-5">

                        <button type="button" onClick={iniciaCadastroUsuario} className="btn btn-primary">Adicionar Novo usuário</button>

                        <div id="container-adduser"className="hidden mt-4">
                            <AddUser/>
                        </div>

                    </div>

                </div>
            </main>
        </Fragment>

        
    )
}
