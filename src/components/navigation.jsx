import { Link } from "react-router-dom";

export function Menu() {

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
            <div className="container-fluid">

                <Link to="/home">
                    <img className="navbar-brand" alt="logo-actu" src={require('../assets/logo.jpeg')}></img>
                </Link>

                <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">

                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link active" aria-current="page" href="#">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/recarga" className="nav-link active" aria-current="page" href="#">Recarga</Link>
                        </li>
                    </ul>

                    <ul class="nav navbar-nav my-2 my-lg-0">
                        <li class="nav-item"><a class="nav-link" href="/perfil"><i class="fas fa-user"></i> Meu Perfil</a></li>
                        <li class="nav-item"><a class="nav-link" href="/login"><i class="fas fa-sign-in-alt"></i> Sair</a></li>
                    </ul>

                </div>
            </div>
        </nav>
    )
}