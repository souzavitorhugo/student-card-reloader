import { MenuUsuarioPadrao } from "../../components/GeneralComponents/user-navigation.jsx"

import { Menu } from "../../components/GeneralComponents/main-navigation.jsx"

export default function PaginaUsuario() {
    return (
        <page id="pagUsuarioPadrao">
            <header className="page-header">
                <MenuUsuarioPadrao />
            </header>

            <main className="">
                <div className="py-5 px-3 center-mid column">

                    <h2 className="mb-5 text-center">Bem vindo, Usuário</h2>

                    <div className="p-2 card-user">

                        <p className="mt-5 ml-2"> <i> Cartão do Estudante - ACTU </i> </p>
                    </div>

                </div>
            </main>
        </page>
    )
}