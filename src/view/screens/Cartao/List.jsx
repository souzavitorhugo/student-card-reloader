import { Link } from "react-router-dom";
import { Menu } from "../../components/GeneralComponents/main-navigation"

import TableCartoes from "../../components/LoginComponent/table-cartao"

import AddCartao from "./add"

export default function CartaoLista() {
    function createCartoes(aluno) {
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
                        Cartões Cadastrados
                    </h1>

                    <TableCartoes/>

                    <div id="formulario-cadastro" className="pt-5">

                        <button type="button" onClick={createCartoes} className="btn btn-primary">Adicionar Novo Cartão</button>

                        <div id="container-addaluno"className="hidden mt-4">
                            <AddCartao/>
                        </div>

                    </div>
                </div>
            </main>
        </page>
    )
}