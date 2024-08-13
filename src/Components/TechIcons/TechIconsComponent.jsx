import React from 'react';
import './TechIcons.css'; // Asegúrate de definir estilos para la nueva estructura

export const TechIconsComponent = ({ logos, title }) => {
    return (
        <div className="techicons-container">
            {title && <h2>{title}</h2>}
            <div className="techicons-images">
                {logos.map((logo, index) => (
                    <div key={index} className="tech-icon-wrapper">
                        {logo.link ? (
                            <a href={logo.link} target="_blank" rel="noopener noreferrer">
                                <img 
                                    src={logo.src} 
                                    alt={logo.alt} 
                                    className={logo.className} 
                                />
                            </a>
                        ) : (
                            <img 
                                src={logo.src} 
                                alt={logo.alt} 
                                className={logo.className} 
                            />
                        )}
                        {logo.version && <p className="tech-icon-version">{logo.version}</p>}
                        {logo.highlightText && <p className="highlight-text">{logo.highlightText}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};
