import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { Link, useOutletContext, useLocation } from 'react-router-dom';
import Markdown from '@components/Markdown';
import { getBlogPost, getBlogPosts } from '@src/api/blogService';
import { IPostOutletContext } from '@src/interfaces';

const Post: React.FC = () => {
    const location = useLocation();
    const [nextPost, setNextPost] = useState(null);
    const [previousPost, setPreviousPost] = useState(null);

    const { endpoint, toggleMainPageView }: IPostOutletContext = useOutletContext();
    const parentPath = location.pathname.split('/').slice(0, -1).join('/');

    let params = useParams();

    useEffect(() => {
        // refresh component
        handlePosts(posts);
    }, [params.postId]);

    const handlePosts = (posts: any) => {
        if (!Array.isArray(posts)) {
            return;
        }

        // Gets next and previous posts
        const index = posts.findIndex(
            (post: any) => post.filename === params.postId,
        );
        if (index === 0) {
            setPreviousPost(null);
        } else {
            setPreviousPost(posts[index - 1].filename);
        }
        if (index === posts.length - 1) {
            setNextPost(null);
        } else {
            setNextPost(posts[index + 1].filename);
        }
    };

    const {
        isLoading: isLoading,
        isSuccess: isSuccess,
        data: post,
    } = useQuery({
        queryKey: ['post', params.postId],
        queryFn: () => getBlogPost(endpoint, params.postId),
        select: (data) => data.data,
        enabled: true,
    });

    const { data: posts } = useQuery({
        queryKey: ['posts'],
        queryFn: () => getBlogPosts(endpoint),
        select: (data) => data.data,
        onSuccess: (data) => handlePosts(data),
        enabled: true,
    });

    return (
        <div className='blog__post'>
            <div className='blog__post_nav'>
                <Link to={parentPath} onClick={toggleMainPageView}>
                    <h4>Go back</h4>
                </Link>

                {previousPost && (
                    <Link id='previous' to={`${parentPath}/${previousPost}`}>
                        <h4>Previous Post</h4>
                    </Link>
                )}

                {nextPost && (
                    <Link id='next' to={`${parentPath}/${nextPost}`}>
                        <h4>Next Post</h4>
                    </Link>
                )}
            </div>

            <div className='divider' />

            <div className='blog__post_content'>
                {isLoading && <div>Loading...</div>}
                {isSuccess && post && <Markdown markdown={post} />}
            </div>

            <div className='divider' />

            <div className='blog__post_nav'>
                <h4>Created: {params.postId}</h4>

                {previousPost && (
                    <Link id='previous' to={`${parentPath}/${previousPost}`}>
                        <h4>Previous Post</h4>
                    </Link>
                )}

                {nextPost && (
                    <Link id='next' to={`${parentPath}/${nextPost}`}>
                        <h4>Next Post</h4>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Post;
