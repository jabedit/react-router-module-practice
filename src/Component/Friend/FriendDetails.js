import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friendDetail = useLoaderData()
    return (
        <div>
            <h2>Name : {friendDetail.name}</h2>
            <p>Phone : {friendDetail.phone}</p>
           
           
        </div>
    );
};

export default FriendDetails;