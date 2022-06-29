import { Link, useNavigate} from "react-router-dom";

import {useUsuario} from '../../../context/usuario'
import {useAuth} from '../../../context/Auth'


export function MenuUsuarioPadrao() {
    const { logout } = useAuth();
    const { usuario } = useUsuario();
    const {navigate} = useNavigate();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-padrao sticky-top bg-padrao">
            <div className="container-fluid">

                <Link to="/">
                    <img className="navbar-brand" alt="logo-actu" src={require('../../../assets/logo.jpeg')}></img>
                </Link>

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    </ul>

                    <div className="dropdown center-mid pointer">
                        <p className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                            id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>{usuario?.nome}</strong>
                        </p>

                        <ul className="w-100 dropdown-menu dropdown-menu-end bg-padrao" aria-labelledby="navbarDropdownMenuLink">
                            
                            <li><a className="dropdown-item text-dark" href="#user-logout" onClick={e => { e.preventDefault(); logout();
}}><i className="fas fa-sign-in-alt"></i> Sair</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}