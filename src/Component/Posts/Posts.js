import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {
    const allPosts = useLoaderData()
    return (
        <div className='container'>
            {
                allPosts.map(post => <Post
                    key={post.id}
                    post={post}
                    />)
            }
        </div>
    );
};

export default Posts;