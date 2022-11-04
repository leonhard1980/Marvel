import React from "react";
import { useHistory} from "react-router-dom";
import './Register.css';
import {useState} from "react";
import Bumper from "../../components/bumper/Bumper";
import axios from "axios";


function Register() {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const history = useHistory();

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
            history.push('/login');
        } catch(e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return(
        <>
            <div className="achtergrondregister">
                <Bumper
                    classname="bumper1"
                    tekst="Registreer je om te ontdekken in welke series jouw held speelt!"
                />
                <Bumper
                    classname="bumper4"
                />
                <div>
                    <form className="container"
                          onSubmit={handleSubmit}>
                        <label htmlFor="email-field"
                               className="inputs">
                            Emailadres:
                            <input
                                type="email"
                                id="email-field"
                                name="email"
                                value={email}
                                className="field"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label htmlFor="username-field"
                        className="inputs">
                            Gebruikersnaam:
                            <input
                                type="text"
                                id="username-field"
                                value={username}
                                className="field"
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>

                        <label htmlFor="password-field"
                               className="inputs">
                            Wachtwoord:
                            <input
                                type="password"
                                id="password-field"
                                name="password"
                                value={password}
                                className="field"
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

                </div>

            </div>
        </>
    );
}

export default Register;






