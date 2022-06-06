import React from 'react';
import { Link } from 'react-router-dom';
import "./gora.css"

export default function Gora() {
    const user = true;

    return (
        <div className="gora">
            <div className="goraLewo">
                <i className="ikonyGora fa-brands fa-facebook"></i>
                <i class="ikonyGora fa-brands fa-instagram"></i>
                <i class="ikonyGora fa-brands fa-strava"></i>
            </div>
            <div className="goraSrodek">
                <ul className="menu">
                    <li className="pozycjaMenu"><Link className='link' to="/">Start</Link></li>
                    <li className="pozycjaMenu"><Link className='link' to="/">O mnie</Link></li>
                    <li className="pozycjaMenu"><Link className='link' to="/">Kontakt</Link></li>
                    <li className="pozycjaMenu"><Link className='link' to="/napisz">Napisz</Link></li>
                    <li className="pozycjaMenu">
                        {user && "Wyloguj"}</li>
                </ul>
            </div>
            <div className="goraPrawo">
                {
                    user ? (
                        <img className="goraObraz"
                            src="https://db3pap006files.storage.live.com/y4mG_mBluNHkPQ3q3kqwhmQ8xlDiYQMtGeQr1geEHACIis0pOJ34BTSZ3HWK1Wgi2aJdIT4zV9H65UvTZftUxEU2R9Y_GHVbJGJWXT0tn6Bb1rbIP-kwaTga5KOgzCNh8tdil8jIiooa9wSpOhHfLv4HkE2trGRKEj5NqS_TbwcO79xWOnsN2A7hwumwwlwQu5C?width=688&height=688&cropmode=none"
                            alt="" />
                    ) : (
                        <ul className='menu'>
                            <li className="pozycjaMenu"><Link className='link' to="/login">Login</Link></li>

                            <li className="pozycjaMenu"><Link className='link' to="/zarejestruj">Zarejestruj</Link></li>

                        </ul>
                    )}


                <i className="ikonaSzukania fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}