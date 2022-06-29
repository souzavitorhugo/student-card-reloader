import { Link } from "react-router-dom";
import { Menu } from "../../components/GeneralComponents/main-navigation"

import TableEscolas from "../../components/LoginComponent/table-escolas"

export default function ListaAlunos() {
    return(
        <page>
            <header>
                <Menu/>
            </header>

            <main id="listaAlunosAdm">

                <div className="center-mid column container-usuarios py-5">

                    <h1 className=""> 
                        Escolas Cadastrados
                    </h1>

                    <TableEscolas/>

                </div>
            </main>
        </page>
    )
}