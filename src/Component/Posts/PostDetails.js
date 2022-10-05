import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import Post from './Post';

const PostDetails = () => {
    const post = useLoaderData()
    const {id, body, title, userId} = post
    const nevigate = useNavigate()
    
    const handleAuore =()=>{
        nevigate(`/friends/${userId}`)
    }
    
    return (
        <div className='friend-container'>
            <h2>{title}</h2>
            <p>{body}</p>
            <button onClick={handleAuore}>post-autor</button>
        </div>
    );
};

export default PostDetails;