import React, { createContext,useEffect, useState} from "react";
import { useHistory } from 'react-router-dom';
import axios from "axios";
import isTokenValid from "../components/helpers/isTokenValid";
export const AuthContext = createContext({});

function AuthContextProvider({children}){
    const [isAuth, toggleIsAuth] = useState({
        isAuth: false,
        user: null,
        status: 'pending',
    });
    const history = useHistory();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            isTokenValid(token);// hier in het if statement kijken of je kan checken of het token geldig is. Door de timestamp te checken. die check zou je in een helperfunctie kunnen zetten. Maak een functie die heet: IsTokenValid. die return true of false.
            fetchUserData(token, null);
        } else {
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }, []);

    function login(JWT) {
        // zet de token in de Local Storage
        localStorage.setItem('token', JWT);
        fetchUserData( JWT, '/profile');
        history.push('/profile');
    }

    function logout() {
        localStorage.clear();
        toggleIsAuth({
            isAuth: false,
            user: null,
            status: 'done',
        });
        console.log('Gebruiker is uitgelogd!');
        history.push('/');
    }

    async function fetchUserData(token, redirectUrl) {
        try {
            // haal gebruikersdata op met de token en id van de gebruiker
            const result = await axios.get('https://frontend-educational-backend.herokuapp.com/api/user', {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            // zet de gegevens in de state
            toggleIsAuth({
                ...isAuth,
                isAuth: true,
                user: {
                    username: result.data.username,
                    email: result.data.email,
                    id: result.data.id,
                },
                status: 'done',
            });

            // als er een redirect URL is meegegeven (bij het mount-effect doen we dit niet) linken we hiernnaartoe door
            // als we de history.push in de login-functie zouden zetten, linken we al door voor de gebuiker is opgehaald!
            if (redirectUrl) {
                history.push(redirectUrl);
            }

        } catch (e) {
            console.error(e);
            // ging er iets mis? Plaatsen we geen data in de state
            toggleIsAuth({
                isAuth: false,
                user: null,
                status: 'done',
            });
        }
    }

    const contextData = {
        isAuth: isAuth.isAuth,
        user: isAuth.user,
        login: login,
        logout: logout,
    };

    return(
        <AuthContext.Provider value={contextData}>
            {isAuth.status === 'done' ? children : <p>Loading...</p>}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
