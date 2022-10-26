import React from "react";
import {Link, useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import './Register.css';
import Bumper from "../components/bumper/Bumper";
import axios from "axios";


function Register() {

    const [checktandc, toggleChecktandc] = React.useState(false);
    const { register, handleSubmit, formState: {errors}} = useForm();

    let history = useHistory();

    function onFormSubmit(data){
        console.log(data);
    }

    function handleClick(){
        history.push("./Home");
    }

    return(
        <>

            <Bumper
                classname="bumper1"
                tekst="Log je nu in om mee te doen!"
            />
            <h1> FORM IS NOT CONNECTED. MAAR WAAROM NIET???</h1>
            <div>
                <form className="container"
                      onSubmit={handleSubmit(onFormSubmit)}>

                <span className="woordjes">

                        Gebruikersnaam:
                </span>
                    <input
                        className="textfield"
                        type="text"
                        placeholder="schrijf hier je gebruikersnaam"
                        {...register("name", {required: "Naam is verplicht", maxLength:  {value: 24, message: "Uw gebruikersnaam mag niet langer zijn dan 24 karakters", }})}
                    />
                    {errors.name && <p>{errors.name.message}</p>}

                    <span className="woordjes">
                        email:
                    </span>
                    <input
                        className="textfield"
                        type="email"
                        placeholder="schrijf hier je email"
                        {...register("email", {required: "email is verplicht"})}
                        //het email-type, check automatisch al op @, dus hier heb ik geen extra validatie ingebouwd.
                    />
                    {errors.email && <p>{errors.email.message}</p>}

                    <span className="woordjes">
                        Password:
                        </span>
                    <input
                        className="textfield"
                        type="password"
                        placeholder="schrijf hier je password"
                        {...register("password", {required: "Naam is verplicht", maxLength:  {value: 80, message: "Uw naam mag niet langer zijn dan 80 karakters", }})}
                    />
                    {errors.password && <p>{errors.password.message}</p>}


                    <p className="checkboxcss">
                        <input
                            type="checkbox"
                            {...register("termsAndConditions")}
                            checked={checktandc}
                            onChange={() => toggleChecktandc(!checktandc)}
                        />
                        <span className="woordjes">
                        Ik ben akkoord met de algemene voorwaarden
                        </span>
                    </p>
                    <button
                        disabled={!checktandc}
                        type="submit"
                        onClick={handleClick}
                    >
                        Send
                    </button>
                </form>

                <article>
                    <Link to="/"> Terug naar Home></Link>
                </article>
            </div>


        </>
    );
}

export default Register;


const response = await axios.post('http://servernovi', {
    'kijk in de documentatie. Ditzal iets zijn als:'
    user: "",
    password: "",
},{
    headers: {
        "Content-Type": 'application/json',
        Authorization: 'Bearer xx.xx.xx',
    }
});
