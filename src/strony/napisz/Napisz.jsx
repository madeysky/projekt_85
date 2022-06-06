import React from 'react';
import "./napisz.css"

export default function Napisz() {
    return (
        <div className="napisz">
            <img
            className="napiszObraz"
            src="https://scontent.fktw4-1.fna.fbcdn.net/v/t1.6435-9/66645436_2333124350269838_7780810358851108864_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=VrvU0-5uQ8YAX8ccob3&_nc_ht=scontent.fktw4-1.fna&oh=00_AT8bWmbjE2UFAF--cugX8vG4pVKwGW6yWO7FTX1VjIMkxA&oe=62B41D29" 
            alt="" />
            <form className="napiszFormularz">
                <div className="napiszFormularzGrupa">
                    <label htmlFor="fileInput">
                        <i className="napiszIkona fa-solid fa-plus"></i>
                    </label>
                    <input type="file" id="fileInput" style={{ display: "none" }} />
                    <input type="text" placeholder="Tytuł" className="napiszInput" autoFocus={true} />
                </div>
                <div className="napiszFormularzGrupa">
                    <textarea placeholder="Opowiedz swoją historię..." type="text" className="napiszInput napiszTekst">
                    </textarea>
                </div>
                <button className="napiszPotwierdz">Opublikuj</button>
            </form>
        </div>
    )
}