import React from "react";
import "./Contact.css";
import { contactData } from "../../Components/Datos/ContactData";
import { TechIconsComponent } from "../../Components/TechIcons/TechIconsComponent";

export const Contact = () => {
  return (
    <div id="contact" className="contact-page">
      <div className="contact-container">
        <h1>Contactame</h1>
        <div className="home-list">
          {contactData.map((data, index) => (
            <TechIconsComponent key={index} logos={data.techIcons}/>
          ))}
        </div>
      </div>
    </div>
  );
};
