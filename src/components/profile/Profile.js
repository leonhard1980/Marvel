import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';
import './Profile.css';
import Bumper from "../bumper/Bumper";

function Profile() {
    const [profileData, setProfileData] = useState({});
    const { user } = useContext(AuthContext);

    useEffect(() => {
        async function fetchProfileData() {
            const token = localStorage.getItem('token');

            try {
                const result = await axios.get('http://localhost:3000/660/private-content', {
                    headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${token}`,
                    },
                });
                setProfileData(result.data);
            } catch (e) {
                console.error(e);
            }
        }

        fetchProfileData();
    }, [])

    return (
        <>
            <div className="profile-background">
                <Bumper
                    classname="bumper2"
                    tekst="Welkom op je profielpagina"/>
                <Bumper
                    classname="bumper4"/>
                <article className="containerprofile">
            <h1>Profielpagina</h1>
            <section>
                <h2 className="profilekop">Gegevens</h2>
                <p className="profile-text">Welkom {user.username}</p>
                <p className="profile-text"><strong>Gebruikersnaam:</strong> {user.username}</p>
                <p className="profile-text"><strong>Email:</strong> {user.email}</p>
            </section>

                <p>Terug naar de <Link to="/">Homepagina</Link></p>
                </article>
                </div>

        </>
    );
}

export default Profile;
