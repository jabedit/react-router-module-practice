import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from './Friend';

const Friends = () => {
    const friends = useLoaderData();
    console.log(friends)
    return (
        <div className='container'>
            {
                friends.map(friend => <Friend
                    key={friend.id}
                    friend={friend}
                    />)
            }
        </div>
    );
};

export default Friends;