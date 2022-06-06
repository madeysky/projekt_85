import React from "react";
import "./pasekBoczny.css";

export default function PasekBoczny() {
  return (<>
    <div className="pasekboczny">
      <div className="elementPaska">
        <span className="tytulWPasku">O MNIE</span>
        <img src="https://db3pap006files.storage.live.com/y4m3ydIZBJ8dQdUk3DwRC0Ocln1unvzG1t6WOFkBlyzdAUnWOrv8pjsgL_Uv2GgMye30aaNHs3Hzq2L4TX_FW66_NsYDozVLquUsT2IcElvTbs1Qoik8wtO4SnhbyQwjrbTWiSY8ViMVhfOuNAO59m0And63_gWMV5e9x65wzjgiWn7i-ZnTfo1MWSoRF1zIBnr?width=768&height=512&cropmode=none" alt="" />
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
      </div>

      <div className="elementPaska">
        <span className="tytulWPasku">KATEGORIE</span>
        <ul className="listaWPasku">
          <li className="elementListyWPasku">Rower</li>
          <li className="elementListyWPasku">Bieganie</li>
          <li className="elementListyWPasku">Morsowanie</li>
          <li className="elementListyWPasku">Sprzęt</li>
          <li className="elementListyWPasku">Krwiodawstwo</li>
          <li className="elementListyWPasku">Dieta</li>
        </ul>
      </div>
 
      <div className="elementPaska">
      <span className="tytulWPasku">OBSERWUJ MNIE</span>
      <div className="spolecznoscioweWPasku">
            <i className="ikonyWPasku fa-brands fa-facebook"></i>
            <i class="ikonyWPasku fa-brands fa-instagram"></i>
            <i class="ikonyWPasku fa-brands fa-strava"></i>
      </div>

      </div>
    </div>
    </>
  )
}

