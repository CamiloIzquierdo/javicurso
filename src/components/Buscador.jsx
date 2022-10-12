import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

function Buscador() {
    const [pelicula, setPelicula] = useState("");
    const navigate = useNavigate();
    const debounceRef = useRef();
    const busqueda = ({ target }) => {
        if (debounceRef.current) clearTimeout(debounceRef.current);
        debounceRef.current = setTimeout(() => {
            setPelicula(target.value);
        }, 1000);
    };
    useEffect(() => {
        if (pelicula.length > 1) {
            navigate(`/resultados/keyword=${pelicula}`);
        } else {
            navigate("/listado");
        }
    }, [pelicula]); //eslint-disable-line

    return (
        <form>
            <input type="text" placeholder="buscar" onChange={busqueda} />
        </form>
    );
}

export default Buscador;
