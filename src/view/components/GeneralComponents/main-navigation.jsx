import { Link } from "react-router-dom";

export function Menu() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">

                <Link to="/home">
                    <img className="navbar-brand" alt="logo-actu" src={require('../../../assets/logo.jpeg')}></img>
                </Link>

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active">Home</Link>
                        </li>

                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link text-white dropdown-toggle"
                                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <strong>Alunos</strong>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link to="/alunos" className="nav-link">
                                        Listar Alunos
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/alunos" className="nav-link">
                                        Adicionar Alunos
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link text-white dropdown-toggle"
                                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <strong>Escolas</strong>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link to="/escolas" className="nav-link">
                                        Listar Escolas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/escolas" className="nav-link">
                                        Adicionar Escolas
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item dropdown">
                            <a href="#" className="nav-link text-white dropdown-toggle"
                                id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                                <strong>Carteirinha</strong>
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDropdownMenuLink">
                                <li>
                                    <Link to="/cartao" className="nav-link">
                                        Listar Carteirinhas
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/cartao" className="nav-link">
                                        Adicionar Carteirinhas
                                    </Link>
                                </li>
                            </ul>
                        </li>

                        <li className="nav-item">
                            <Link to="/recarga" className="nav-link active" aria-current="page" href="#">Recarga</Link>
                        </li>
                    </ul>

                    <div class="dropdown">
                        <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle"
                            id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>Perfil</strong>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item" href="/perfil"><i class="fas fa-user"></i> Meu Perfil</a></li>
                            <li><hr class="dropdown-divider" /></li>
                            <li><a class="dropdown-item" href="/login"><i class="fas fa-sign-in-alt"></i> Sair</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}