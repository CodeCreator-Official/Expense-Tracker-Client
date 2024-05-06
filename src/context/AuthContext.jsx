/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

const INTIAL_USER = { 
    user_id: '',
    fullname: '', 
    avatar: '',
    email: ''
}

const INTITIAL_VALUE = {
    user: INTIAL_USER,
    setUser: () => { },
    isLoading: false,
    setIsloading: () => { },
    isAuthenticated: false,
    setIsAuthenticated: () => { },
}

const AuthContext = createContext(INTITIAL_VALUE)

export function AuthContextProvider({ children }) {

    const [user, setUser] = useState(INTIAL_USER)
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const navigate = useNavigate()
    // console.log(user)

    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser) {
            setUser(storedUser)
            setIsAuthenticated(true)
        } else {
            setIsAuthenticated(false);
            navigate('/signin');
        }
    }, [localStorage]);

    const values = {
        user,
        setUser,
        isAuthenticated
    }

    return (
        <AuthContext.Provider value={values}>
            {children}
        </AuthContext.Provider>
    )
}

const useAuthContext = () => useContext(AuthContext)

export default useAuthContext
