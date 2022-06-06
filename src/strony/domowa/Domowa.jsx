import React from 'react';
import Naglowek from "../../komponenty/naglowek/Naglowek"
import PasekBoczny from "../../komponenty/pasekBoczny/PasekBoczny"
import Posty from "../../komponenty/posty/Posty"
import "./domowa.css"


export default function Domowa() {
  return (
    <>
    <Naglowek/>
    <div className="domowa">
         <Posty/>
         <PasekBoczny/>
    </div>
    </>   
  );
}
