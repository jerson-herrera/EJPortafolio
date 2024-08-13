// import React from 'react';
// // import './lenguajes.css';

// export const TechIConsComponent = ({ logos }) => {
//     return (
//         <div className="lenguajes-container">
//             <h2>Lenguajes</h2>
//             <div className="lenguajes-images">
//                 {logos.map((logo, index) => (
//                     <img 
//                         key={index} 
//                         src={logo.src} 
//                         alt={logo.alt} 
//                         className={logo.className} 
//                     />
//                 ))}
//             </div>
//         </div>
//     );
// };

import React from 'react';
import './TechIcons.css'; // Asegúrate de definir estilos para la nueva estructura

export const TechIconsComponent = ({ logos }) => {
    return (
        <div className="techicons-container">
            <h2>Tecnologías</h2>
            <div className="techicons-images">
                {logos.map((logo, index) => (
                    <div key={index} className="tech-icon-wrapper">
                        <img 
                            src={logo.src} 
                            alt={logo.alt} 
                            className={logo.className} 
                        />
                        {logo.version && <p className="tech-icon-version">{logo.version}</p>}
                    </div>
                ))}
            </div>
        </div>
    );
};
