import React from 'react';
import PasekBoczny from "../../komponenty/pasekBoczny/PasekBoczny"
import "./ustawienia.css"


export default function Ustawienia() {
    return (
        <div className="ustawienia">
            <div className="ustawieniaWrapper">
                <div className="ustawieniaTytul">
                    <span className="ustawieniaAktualizujTytul">Aktualizuj Konto</span>
                    <span className="ustawieniaSkasujTytul">Skasuj Konto</span>
                </div>
                <form className="ustawieniaFormularz">
                    <label>Zdjęcie profilowe</label>
                    <div className="ustawieniaZP">
                        <img src="https://scontent.fktw1-1.fna.fbcdn.net/v/t1.6435-9/176170474_10227315856542089_1592331316775221680_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=LCCGuMPW7VIAX8yaYiT&_nc_ht=scontent.fktw1-1.fna&oh=00_AT_4IegTucI_8oqODkxw1LpTaEW6o6ngqOC7nODECJZ_3A&oe=62B08EC5" alt="" />
                        <label htmlFor="fileInput">
                        <i className="ustawieniaZPIkona fa-regular fa-circle-user"></i>
                        </label>
                        <input type="file" id="fileInput" style={{display: "none"}}/>
                    </div>
                    <label>Nazwa Użytkownika:</label>
                    <input type="text" placeholder="Madeysky" />
                    <label>E-mail:</label>
                    <input type="email" placeholder="pawelrmadej@gmail.com" />
                    <label>Hasło:</label>
                    <input type="password" />
                    <button className="ustawieniaZatwierdz">Zaktualizuj</button>
                </form>
            </div>
            <PasekBoczny />
        </div>
    )
}