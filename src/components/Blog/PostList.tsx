import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getBlogPosts } from '@src/api/blogService';
import { useNavigate, useOutletContext, useLocation } from 'react-router-dom';
import { IPostOutletContext } from '@src/interfaces';

const PostList: React.FC = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const { endpoint, toggleMainPageView }: IPostOutletContext =
        useOutletContext();

    const { isLoading, isSuccess, data } = useQuery({
        queryKey: ['posts'],
        queryFn: () => getBlogPosts(endpoint),
        select: (data) => data.data,
        enabled: true,
    });

    const handleClick = (filename: string) => {
        toggleMainPageView();
        navigate(`${location.pathname}/${filename}`);
    };

    return (
        <div className='blog__list'>
            <h3 className='center'>Updates</h3>
            <div className='blog__list_content'>
                {isLoading && <div id='center'>Loading...</div>}

                <table>
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Posted</th>
                        </tr>
                    </thead>
                    <tbody>
                        {isSuccess &&
                            Array.isArray(data) &&
                            data?.map((post: any, key: any) => {
                                return (
                                    <tr key={key} onClick={() => handleClick(post.filename)}>
                                        <td>{post.title}</td>
                                        <td>{post.filename}</td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PostList;
