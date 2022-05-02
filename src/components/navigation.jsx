import { React, useState } from 'react';
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function Menu() {

    const [page, setPage] = useState('') 

    return (
        <ul className="nav nav-pills justify-content-center">

            <div className="navbar-bran"> <img alt="logo" src="../assets/logo.jpeg"></img> </div>

            <li className="nav-item">
                <Link to="/" className="nav-link active" aria-current={page}>Home</Link>
            </li>

            <li className="nav-item">
                <Link to="./login" className="nav-link active text-light" aria-current={page}>Acesse seu perfil</Link>
            </li>

        </ul>
    )
}