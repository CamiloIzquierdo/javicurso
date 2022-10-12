import { useNavigate } from "react-router-dom";
import "../css/Deslogear.css";
function Deslogear() {
    const navigate = useNavigate();
    const deslogear = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        <>
            <button className="btn btn-dark boton" onClick={deslogear}>
                deslogear
            </button>
        </>
    );
}

export default Deslogear;
