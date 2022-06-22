import { Link } from "react-router-dom";
import { Menu } from "../../components/navigation.jsx"

export default function List() {
    return(
        <page>
            <header className="page-header">
                <Menu />
            </header>
            <p>Lista de Escolas</p>
        </page>
    )
}