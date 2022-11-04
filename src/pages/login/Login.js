import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import Bumper from "../../components/bumper/Bumper";
import './Login.css';
import PhotoSlider from "../../components/photoSlider/PhotoSlider";

function SignIn() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);

        try {
            const result = await axios.post('https://frontend-educational-backend.herokuapp.com/api/auth/signin', {
                username: username,
                password: password,
            });
            console.log(result.data);
            login(result.data.accessToken);

        } catch(e) {
            console.error(e);
            toggleError(true);
        }
    }

    return (
        <>
            <div className="achtergrondlogin">
                  <Bumper
                      classname="bumper1"
                      tekst="Log nu in om mee te doen!"
                  />
                <Bumper
                    classname="bumper4"
                />
            <div className="container">

            <form onSubmit={handleSubmit}>
                <label htmlFor="email-field"
                       className="inputs">
                    Username:
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
                {error && <p className="error">Combinatie van emailadres en wachtwoord is onjuist</p>}

                <button
                    type="submit"
                    className="form-button"
                >
                    Inloggen
                </button>
            </form>
            </div>


                <p className="backtoregister">Heb je nog geen account?
                    <Link to="/register">Registreer</Link> je dan eerst.</p>

                <Bumper
                    classname="bumper4"
                />

                <PhotoSlider
                    classnaampje="topplaatje2"
                    quote={null}
                    greatmind="Home of Superhero's"
                />

                </div>



            </>
    );
}

export default SignIn;
