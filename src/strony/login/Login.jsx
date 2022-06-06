import React from 'react';
import { Link } from 'react-router-dom';
import "./login.css"


export default function Login() {
    return (
        <div className="login">
            <span className="loginTytul">Logowanie</span>
            <form className="loginFormularz">
                <label>Email:</label>
                <input type="text" className="loginInput" placeholder="Wprowadź e-mail..." />
                <label>Hasło:</label>
                <input type="password" className="loginInput"  placeholder="Wprowadź hasło..." />
                <button className="przyciskLogin">Zaloguj się</button>
            </form>
            <button className="przyciskLoginZarejestruj">
                <Link className="link" to= "/zarejestruj">Zarejetruj się</Link>
            </button>
        </div>
    )
}