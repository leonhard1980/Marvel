

import React from "react";
import {Link, useState, useHistory} from "react-router-dom";
import './Register.css';
import axios from "axios";

//1 maak een async naar novi server. stuur: email(@), username en wachtwoord(6)
// 2 doorlinken naar login.
// 3 daar inloggen met username en wachtwoord (dus niet email)
// DAN krijg je het token. En DAARMEE krijg je een uniek accessToken. (als je DIE krijgt, dan pas kun je door naar de rest).
// doe niet PRECIES hetzelfde als in banana-security, maar check in de novibackend documentatie hoe ik het kan aanpakken.
// ik heb useForm gebruikt (wat anders is dan de useState in bananasecurity.

// dat token gebruik je om:
// 1. localStorage om te voorkomen dat je uitlogt bij refresh
// 2. om toegang te krijgen tot SERIES.
// 3. kijk dan naar de laatste les REACT.

function Register() {
    // state voor het formulier
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    // state voor functionaliteit
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const history = useHistory();
    /*
        const [checktandc, toggleChecktandc] = React.useState(false);
        const { register, handleSubmit, formState: {errors}} = useForm();
    */

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);
        try {
            const result =
                await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signup', {
                    email: email,
                    password: password,
                    username: username,
                });
            console.log(result);
            // als alles goed gegaan is, linken we door naar de login-pagina
            history.push('/login');
        } catch(e) {
            console.error(e);
            toggleError(true);
        }
        toggleLoading(false);
    }
    function handleClick(){
        history.push("./Home");
    }

    return(
        <>
            <h1>Registreren</h1>

            <form onSubmit={handleSubmit}>
                <label htmlFor="email-field">
                    Emailadres:
                    <input
                        type="email"
                        id="email-field"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>

                <label htmlFor="username-field">
                    Gebruikersnaam:
                    <input
                        type="text"
                        id="username-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>

                <label htmlFor="password-field">
                    Wachtwoord:
                    <input
                        type="password"
                        id="password-field"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                {error && <p className="error">Dit account bestaat al. Probeer een ander emailadres.</p>}
                <button
                    type="submit"
                    className="form-button"
                    disabled={loading}
                >
                    Registreren
                </button>

            </form>

            <p>Heb je al een account? Je kunt je <Link to="/signin">hier</Link> inloggen.</p>

        </>
    );
}

export default Register;
