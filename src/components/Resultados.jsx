import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { BUSCADOR_URL, IMAGE_URL } from "../services/api";
import Deslogear from "./Deslogear";
import PORTADA from "../assets/PORTADA.jpg";

function Resultados() {
    const parametros = useParams();
    const [peliculas, setPeliculas] = useState();
    const peliculasData = async () => {
        try {
            const response = await axios.get(
                `${BUSCADOR_URL}${parametros.pelicula}`
            );
            setPeliculas(response.data.results);
        } catch (e) {
            Swal.fire(`Algo salio mal!!!!`);
        }
    };
    console.log(peliculas);
    useEffect(() => {
        peliculasData();
    }, [parametros]);

    return (
        <>
            <Deslogear />
            <div className="row">
                {peliculas?.map((pelicula, i) => {
                    return (
                        <div className="col-3" key={i}>
                            <div className="card">
                                {pelicula.poster_path ? (
                                    <img
                                        src={`${IMAGE_URL}${pelicula.poster_path}`}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                ) : (
                                    <img
                                        src={PORTADA}
                                        className="card-img-top"
                                        alt="..."
                                    />
                                )}
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {pelicula.original_title}
                                    </h5>
                                    <p className="card-text">
                                        {pelicula.overview?.substring(0, 50)}...
                                    </p>
                                    <Link
                                        to={`/detalle/movieID=${pelicula.id}`}
                                        className="btn btn-primary"
                                    >
                                        Ver pelicula
                                    </Link>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Resultados;
