import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import apiFetch from "../api";
import usePersistedState from "../hooks/usePersistedState";


const AuthContext = createContext()
export default AuthContext

export function AuthProvider({ children }) {
    const [user, setUser] = usePersistedState("user", {})
    const navigate = useNavigate()

    async function authenticateUser(e, data, path) {
        e.preventDefault()

        const response = await apiFetch.post(path, data)
        if (!response.ok) {
            console.log("error")
        } else {
            const result = await response.json()
            setUser(result)

            navigate("/")
        }

    }

    async function logoutUser() {

        //TODO
        const response = await apiFetch.get("users/logout", "")
    }

    const values = {
        authenticateUser,
        user,
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}