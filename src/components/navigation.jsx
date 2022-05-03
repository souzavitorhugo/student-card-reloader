import { Link } from "react-router-dom";

export function Menu() {

    return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid justify-content-center">
                    
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

                            <li className="nav-item button-acesso">
                                <Link to="/login" className="nav-link">Acesse sua conta</Link>
                            </li>

                            {/* descomentar caso necessário 

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </a>

                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a></li>
                                    <li><hr className="dropdown-divider"/></li>
                                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                                </ul>

                            </li> */}

                        </ul>
                
                    </div>
                </div>
            </nav>        
    )
}