import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Post = ({post}) => {
    const {id, body, title} = post
    const navigate = useNavigate()

    const handleShowbutton= () =>{
        navigate(`/post/${id}`)
    }
    
    return (
        <div className='friend-container'>
            <h2> {title}</h2>
            <p>{body}</p>
            <Link to={`/post/${id}`}><button>ShowDetails</button></Link>
            <button onClick={handleShowbutton}>ShowDetails2</button>
        </div>
    );
};

export default Post;