import React from 'react';
import { ProjectsComponent } from "../../Components/Projects/ProjectsComponent";
import { projects } from "../../Components/Datos/ProjectData";
import './Projects.css';

export const Projects = () => {
    return (
        <div id='projects' className="projects-page"> {/* Aplica la clase projects-page aquí */}
            <div className="projects-list">
                {projects.map((project, index) => (
                    <ProjectsComponent
                        key={index}
                        title={project.title}
                        imageUrl={project.imageUrl}
                        alt={project.alt}
                        redirectUrl={project.redirectUrl}
                        className={project.className}
                        descripcion={project.descripcion}
                        techIcons={project.techIcons}
                    />
                ))}
            </div>
        </div>
    );
};
