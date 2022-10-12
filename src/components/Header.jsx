import Buscador from "./Buscador";
import { Link } from "react-router-dom";
import "../css/Header.css";
import Deslogear from "./Deslogear";
function Header() {
    return (
        <header className="sticky-top">
            <nav className="d-flex justify-content-between align-items-center">
                <ul className="d-flex mb-0">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/listado">listado</Link>
                    </li>
                    <li>
                        <Link to="/contacto">contacto</Link>
                    </li>
                </ul>
                <div className="d-flex align-items-center">
                    <Buscador />
                    <Deslogear />
                </div>
            </nav>
        </header>
    );
}

export default Header;
