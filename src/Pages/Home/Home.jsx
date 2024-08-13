import React from "react";
import "./Home.css";
import { TechIconsComponent } from "../../Components/TechIcons/TechIconsComponent";
import { homeData } from "../../Components/Datos/HomeData";

export const Home = () => {
  return (
    <div id="home" className="home-page">
      <div className="home-container">
        <img src="./opticDashy.png" alt="foto-perfil" className="foto-perfil" />
        <div className="text">
          <h1 className="nombre">Jerson Herrera</h1>
          <p className="parrafo">
            Bienvenido a mi portafolio como desarrollador web junior backend
          </p>
          <a href="./hv.pdf" download="hv.pdf">
            <button type="button">Descargar HV</button>
          </a>
          <div className="home-list">
            {homeData.map((data, index) => (
              <TechIconsComponent key={index} logos={data.techIcons} title="contactame " />
            ))}
          </div>
          
        </div>
      </div>
    </div>
  );
};
