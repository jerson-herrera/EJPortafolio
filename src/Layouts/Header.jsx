import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import BurguerButtom from "./BurguerButtom";
import BgDiv from "./BgDiv";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setClicked(false);
        document.body.classList.remove('no-scroll'); // Remover clase cuando se cambia a pantalla grande
      }
    }
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
      document.body.classList.remove('no-scroll'); // Limpiar la clase en el desmontaje
    };
  }, []);

  useEffect(() => {
    if (clicked) {
      document.body.classList.add('no-scroll'); // Agregar clase cuando se activa el menú
    } else {
      document.body.classList.remove('no-scroll'); // Remover clase cuando se desactiva el menú
    }
  }, [clicked]);

  const handleClick = () => {
    if (isMobile) {
      setClicked(!clicked);
    }
  };

  return (
    <nav className="Navbar">
      
      <ul className={`items ${clicked ? "active" : ""}`}>
        <li>
          <a href="#home" onClick={handleClick}>Home</a>
        </li>
        <li>
          <a href="#about" onClick={handleClick}>Sobre mi</a>
        </li>
        <li>
        <a href="#projects" onClick={handleClick}>Proyectos</a>
        </li>
        <li>
          <a href="#contact" onClick={handleClick}>Contact</a>
        </li>
      </ul>

      <div className="burguer">
        <BurguerButtom clicked={clicked} handleClick={handleClick} />
      </div>
      <BgDiv className={clicked ? 'active' : ''} />
    </nav>
  );
};

export default Navbar;
