import { useEffect, useState } from "react";
import { Outlet, Link, Navigate } from "react-router-dom";

const useAuth = () => {
    const [logged, setLogged] = useState(false);
    const token = localStorage.getItem("token");
    useEffect(() => {
        if (token) {
            setLogged(true);
        }
    }, [token]);

    return logged;
};

const ProtectedRoutes = () => {
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : null;
};

export default ProtectedRoutes;
