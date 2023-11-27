import { createContext, useState } from "react";
import apiFetch from "../api";

const AuthContext = createContext()
export default AuthContext

export function AuthProvider({ children }) {
    const [user, setUser] = useState({})

    async function authenticateUser(e, data, path) {
        e.preventDefault()

        const response = await apiFetch.post(path, data)
    }

    const values = {
        authenticateUser,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}