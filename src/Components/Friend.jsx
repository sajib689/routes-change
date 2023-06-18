import React from 'react';
import '../Components/Friend.css'
import { useLoaderData } from 'react-router-dom';
const Friend = () => {
    const user = useLoaderData()
    console.log(user)
    return (
        <div className='sdata'>
           <h1>Name: {user.name}</h1>
           <p>Email: {user.email}</p>
           <p>UserName: {user.username}</p>
        </div>
    );
};

export default Friend;