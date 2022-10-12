import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { DATA_URL, IMAGE_URL } from "../services/api";

function Detalle() {
    const [detalle, setDetalle] = useState([]);
    const parametros = useParams();

    const detallePeli = async () => {
        try {
            const response = await axios.get(
                `${DATA_URL}${parametros.id}?api_key=${process.env.REACT_APP_APIKEY}`
            );
            setDetalle(response.data);
        } catch (e) {
            Swal.fire(`Algo salio mal!!!!`);
        }
    };
    console.log(detalle);
    useEffect(() => {
        detallePeli();
    }, []);

    console.log(parametros.id);
    return (
        <>
            <h2>detalle de {detalle.original_title}</h2>
            <h3>{detalle.overview}</h3>
            <img
                src={`${IMAGE_URL}${detalle.poster_path}`}
                className="card-img-top"
                alt="..."
            />
            {detalle?.production_companies?.map((company) => {
                return (
                    <div key={company.id}>
                        <img
                            src={`${IMAGE_URL}${company.logo_path}`}
                            className="card-img-top"
                            alt="..."
                        />
                        {/*<h1>{company.name}</h1>*/}
                    </div>
                );
            })}
            <button className="btn btn-primary">
                <a href={detalle.homepage} target="_blank" rel="noreferrer">
                    Pagina oficial de la peli!!!!
                </a>
            </button>
        </>
    );
}

export default Detalle;
