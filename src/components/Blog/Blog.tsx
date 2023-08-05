import React from 'react';
import { Outlet } from 'react-router-dom';

import './Blog.scss';

interface BlogProps {
    endpoint: string;
    toggleMainPageView?: () => void;
}

const Blog: React.FC<BlogProps> = ({ endpoint, toggleMainPageView }) => {

    return (
        <div className='blog__container'>
            <Outlet context={{endpoint: endpoint, toggleMainPageView: toggleMainPageView}} />
        </div>
    );
};

export default Blog;
