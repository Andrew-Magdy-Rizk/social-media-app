import { useContext } from "react";
import { authContaxt } from "../context/AuthContaxtProvider";
import { Navigate } from "react-router-dom";

export default function ProtectRoute({ children }) {

    const { token } = useContext(authContaxt);

    if (!token) {
        return <Navigate to={"/login"} />
    }

    return (
        <>
            {children}
        </>
    )
}
