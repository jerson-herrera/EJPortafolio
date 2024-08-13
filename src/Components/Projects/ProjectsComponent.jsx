import React from "react";
import "./Projects.css";
import { TechIconsComponent } from "../TechIcons/TechIconsComponent";

export const ProjectsComponent = ({ title, imageUrl, alt, redirectUrl, className, descripcion, techIcons }) => {
    const handleClick = () => {
        window.open(redirectUrl, '_blank');
    };

    return (
        <div className="projects-component" onClick={handleClick}>
            <h1>{title}</h1>
            <img src={imageUrl} alt={alt} className={className} />
            <p>{descripcion}</p>
            {techIcons && <TechIconsComponent logos={techIcons} />}
        </div>
    );
};
