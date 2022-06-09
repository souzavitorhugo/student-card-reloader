import { Menu } from "../components/navigation.jsx"
import { FormControl } from "../components/form-control";

export default function Perfil() {
    return (

        <page>

            <header className="page-header">
                <Menu />
            </header>

            <div className="container">
                <br/>
                <h1 className=""> Perfil do Usuário </h1>

                <FormControl id="nome" label="Nome" ></FormControl>
                <FormControl id="sobrenome" label="Sobrenome" ></FormControl>
                <FormControl id="email" label="E-mail" ></FormControl>
                <FormControl id="cpf" label="CPF" ></FormControl>
                <button className="btn btn-success">Salvar</button>
            </div>

        </page>


    )
}