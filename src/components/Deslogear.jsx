import { useNavigate } from "react-router-dom";

function Deslogear() {
    const navigate = useNavigate();
    const deslogear = () => {
        localStorage.removeItem("token");
        navigate("/");
    };
    return (
        <>
            <button className="btn btn-dark" onClick={deslogear}>
                deslogear
            </button>
        </>
    );
}

export default Deslogear;
