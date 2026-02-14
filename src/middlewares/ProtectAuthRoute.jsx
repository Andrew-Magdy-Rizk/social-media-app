import { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { authContaxt } from '../context/authContaxtProvider';

export default function ProtectAuthRoute({children}) {

    const { token } = useContext(authContaxt);

    if (token) {
        return <Navigate to={"/"} />
    }

    return (
        <>
            {children}
        </>
    )
}
