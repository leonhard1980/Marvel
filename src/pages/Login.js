import { useForm } from 'react-hook-form';
import React from "react";
import {Link, useHistory} from "react-router-dom";
import './Login.css';
import Bumper from "../components/bumper/Bumper";
/*
De informatie die de gebruiker invult wordt verzameld en als postrequest opgestuurd.
    de servers stuurt een token terug. Daarna is de rest van de logica in de context.
    Token:
    - in Local Stoarage plaatsen
    De juiste gebruikersdata in de state zetten.
    Authenticatie moet nu op true staan.

    */

function Login() {
    const [checktandc, toggleChecktandc] = React.useState(false);
    const { register, handleSubmit, formState: {errors}} = useForm();

    let history = useHistory();

    function onFormSubmit(data){
        console.log(data);
    }

    function handleClick(){
        history.push("./Home");
    }

/*    async function registerUserData(){
        try {
            const response = await axios.put('https://frontend-educational-backend.herokuapp.com/.')
            console.log(response.data);
            setYourHero(response.data);
        } catch(e){
            console.error(e);
        }
    }*/

    return(
        <>
<div className="achtergrondlogin">
        <Bumper
            classname="bumper2"
            tekst="Log je nu in om mee te doen!"
        />

          <article className="buitenste-container">

            <form className="container"
                  onSubmit={handleSubmit(onFormSubmit)}>

                <span className="woordjes">
                    email:
                    <input
                        className="textfield"
                        type="email"
                        placeholder="schrijf hier je email"
                        {...register("email", {required: "email is verplicht"})}
                        //het email-type, check automatisch al op @, dus hier heb ik geen extra validatie ingebouwd.
                    />
                    {errors.email && <p>{errors.email.message}</p>}
                </span>
                <span className="woordjes">
                    Password:
                    <input
                        className="textfield"
                        type="password"
                        placeholder="schrijf hier je password"
                        {...register("password", {required: "Naam is verplicht", maxLength:  {value: 80, message: "Uw naam mag niet langer zijn dan 80 karakters", }})}
                    />
                    {errors.password && <p>{errors.password.message}</p>}
                </span>


                <p className="checkboxcss">
                    <input
                        type="checkbox"
                        {...register("termsAndConditions")}
                        checked={checktandc}
                        onChange={() => toggleChecktandc(!checktandc)}
                    />
                    <span className="woordjes">
                    Akkoord met de voorwaarden
                    </span>
                </p>
                <button
                    disabled={!checktandc}
                    type="submit"
                    onClick={handleClick}
                >
                    Send!
                </button>

                <article>
                    <Link to="/"> Doorlinken?></Link>
                </article>
            </form>



          </article>
            <h1> FORM IS NOT CONNECTED. MAAR WAAROM NIET???</h1>
</div>
        </>
    );
}

export default Login;



