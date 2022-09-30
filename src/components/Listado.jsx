import Deslogear from "./Deslogear";
import { API_URL, IMAGE_URL } from "../services/api";
import { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

function Listado() {
    const [peliculas, setPeliculas] = useState([]);

    const peliculasData = async () => {
        try {
            const response = await axios.get(API_URL);
            setPeliculas(response.data.results);
        } catch (e) {
            Swal.fire(`Algo salio mal!!!!`);
        }
    };
    console.log(peliculas);
    useEffect(() => {
        peliculasData();
    }, []);
    return (
        <>
            <Deslogear />
            <div className="row">
                {peliculas?.map((pelicula, i) => {
                    return (
                        <div className="col-3" key={i}>
                            <div className="card">
                                <img
                                    src={`${IMAGE_URL}${pelicula.poster_path}`}
                                    className="card-img-top"
                                    alt="..."
                                />
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {pelicula.original_title}
                                    </h5>
                                    <p className="card-text">
                                        {pelicula.overview.substring(0, 50)}...
                                    </p>
                                    <Link
                                        to={`/detalle?movieID=${pelicula.id}`}
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
export default Listado;
