import { Link } from "react-router-dom";

function Header() {
    let token = localStorage.getItem("token");

    return (
        <header>
            <nav>
                <ul>
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
            </nav>
        </header>
    );
}

export default Header;
