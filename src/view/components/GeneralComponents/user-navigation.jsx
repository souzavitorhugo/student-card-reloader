import { Link } from "react-router-dom";

export function MenuUsuarioPadrao() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-padrao sticky-top bg-padrao">
            <div className="container-fluid">

                <Link to="/home">
                    <img className="navbar-brand" alt="logo-actu" src={require('../../../assets/logo.jpeg')}></img>
                </Link>

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
                    </ul>

                    <div class="dropdown center-mid">
                        <a href="#" class="d-flex align-items-center text-dark text-decoration-none dropdown-toggle"
                            id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                            <strong>Perfil</strong>
                        </a>

                        <ul class="w-100 dropdown-menu dropdown-menu-end bg-padrao" aria-labelledby="navbarDropdownMenuLink">
                            <li><a class="dropdown-item text-dark" href="/perfil"><i class="fas fa-user"></i> Meu Perfil</a></li>
                            
                            <li><a class="dropdown-item text-dark" href="/login"><i class="fas fa-sign-in-alt"></i> Sair</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}