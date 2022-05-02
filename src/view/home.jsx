import { Link } from "react-router-dom";

export default function Home() {
    return(
        <nav className="w-100 d-flex justify-content-center">
            <h1 className=""> Página Home</h1>

            <li>
                <Link to="/login"> Acesse seu perfil </Link>
            </li>
        </nav>
    )
}