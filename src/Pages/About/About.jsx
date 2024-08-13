// About.jsx
import React from 'react';
import './About.css';
import { TechIconsComponent } from '../../Components/TechIcons/TechIconsComponent';
import { lenguajeProgramacionData } from '../../Components/Datos/AbousSkillsData';

export const About = () => {
  return (
    <div id='about' className='about-page'>
      <div className='about-container'>
        <div className='card about-text'>
          <h1>Sobre mi</h1>
          <p>
            Soy un programador web backend junior apasionado por el desarrollo de aplicaciones eficientes y escalables. Tengo experiencia en la creación de soluciones backend utilizando Node.js y MySQL, y disfruto resolviendo problemas complejos con código limpio y bien estructurado. Durante mi participación en proyectos académicos y personales, he desarrollado habilidades en la gestión de bases de datos, la creación de APIs RESTful y la implementación de sistemas de autenticación y autorización. Apasionado por aprender nuevas tecnologías y mejorar continuamente.
          </p>
          <h3>Actualmente estoy terminando mis estudios como tecnólogo en desarrollo de software en la universidad Fundación Universitaria Católica Lumen Gentium</h3>
        </div>
        <div className='card home-list'>
          {lenguajeProgramacionData.map((data, index) => (
            <TechIconsComponent key={index} logos={data.techIcons} title="Lenguajes de programación" />
          ))}
        </div>
      </div>
    </div>
  );
};
