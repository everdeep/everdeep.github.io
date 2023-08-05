import React from 'react';

import './Projects.scss';
import { Outlet } from 'react-router-dom';

const Projects: React.FC = () => {
    return (
        <div className='projects__container'>
            <h2>Projects</h2>

            <Outlet />
        </div>
    );
}

export default Projects;