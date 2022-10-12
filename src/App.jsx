import Login from "./components/Login";
import { Routes, Route } from "react-router-dom";
import Listado from "./components/Listado";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/App.css";
import ProtectedRoutes from "./components/Protect";
import Detalle from "./components/Detalle";
import Resultados from "./components/Resultados";

function App() {
    //Este es un comentario de prueba
    return (
        <>
            <Header />
            <div className="container d-flex align-items-center flex-column">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route element={<ProtectedRoutes />}>
                        <Route path="/listado" element={<Listado />} />
                        <Route
                            path="/detalle/movieID=:id"
                            element={<Detalle />}
                        />
                        <Route
                            path="/resultados/keyword=:pelicula"
                            element={<Resultados />}
                        />
                    </Route>
                </Routes>
            </div>
            <Footer />
        </>
    );
}

export default App;
