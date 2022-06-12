import { Menu } from "../components/navigation.jsx"

export default function Perfil() {
    return (

        <page>

            <header className="page-header">
                <Menu />
            </header>
            <div className="container py-3">
                <div className="card">
                    <div className="card-header">
                        Saldo
                    </div>
                    <div className="card-body">
                        <h1 className="card-title">R$<small class="text-muted fw-light">20,00</small></h1>
                        <p className="card-text">Validade: 01/01/2023</p>
                        <button type="button" className="w-100 btn btn-lg btn-outline-primary">Recarregar</button>
                    </div>
                </div>
            </div>

        </page>


    )
}