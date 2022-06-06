import React from 'react';
import "./pojedynczy.css"
import PasekBoczny from "../../komponenty/pasekBoczny/PasekBoczny"
import PojedynczyWpis from "../../komponenty/pojedynczyWpis/PojedynczyWpis"

export default function Pojedynczy() {
  return (
    <div className="pojedynczy">
        <PojedynczyWpis/>
        <PasekBoczny/>
    </div>
  )
}
