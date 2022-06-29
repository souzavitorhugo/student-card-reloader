import { Link} from "react-router-dom";

import {useUsuario} from '../../../context/usuario'
import {useAuth} from '../../../context/Auth'

export function Menu() {
    const { logout } = useAuth();
    const { usuario } = useUsuario();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">

                <Link to="/">
                    <img className="navbar-brand" alt="logo-actu" src={require('../../../assets/logo.jpeg')}></img>
                </Link>

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <p href="#" className="pointer nav-link text-white dropdown-toggle"
                                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <strong>Alunos</strong>
                            </p>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link to="/alunos" className="nav-link">
                                        Listar Alunos
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <p href="#" className="pointer nav-link text-white dropdown-toggle"
                                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <strong>Escolas</strong>
                            </p>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link to="/escolas" className="nav-link">
                                        Listar Escolas
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <p href="#" className="pointer nav-link text-white dropdown-toggle"
                                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <strong>Carteirinha</strong>
                            </p>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link to="/cartao" className="nav-link">
                                        Listar Carteirinhas
                                    </Link>
                                </li>
                            </ul>
                        </li>
                    </ul>

                    <div className="dropdown">
                        <p href="#" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle pointer"
                            id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>{usuario?.nome}</strong>
                        </p>

                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                            <li><a className="dropdown-item text-dark" href="#user-logout" onClick={e => { e.preventDefault(); logout();
}}><i className="fas fa-sign-in-alt"></i> Sair</a></li>                        
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}