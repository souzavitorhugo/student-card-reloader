import { Link } from "react-router-dom";
import { Menu } from "../../components/GeneralComponents/main-navigation"

import TableAlunos from "../../components/LoginComponent/table-alunos"

import AddAluno from "./add"

export default function ListaAlunos() {
    function createAlunos(aluno) {
        let container = document.getElementById('container-addaluno');

        container.classList.toggle('hidden')
    }

    return(
        <page>
            <header>
                <Menu/>
            </header>

            <main id="listaAlunosAdm">

                <div className="center-mid column container-usuarios py-5">

                    <h1 className=""> 
                        Alunos Cadastrados
                    </h1>

                    <TableAlunos/>

                    <div id="formulario-cadastro" className="pt-5">

                        <button type="button" onClick={createAlunos} className="btn btn-primary">Adicionar Novo Aluno</button>

                        <div id="container-addaluno"className="hidden mt-4">
                            <AddAluno/>
                        </div>

                    </div>
                </div>
            </main>
        </page>
    )
}