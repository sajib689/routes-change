import React from 'react';
import '../Components/User.css'
import { Link } from 'react-router-dom';
const User = ({user}) => {
    // console.log(user)
    const {id, name, username, email} = user;
    return (
        <div className='user'>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>UserName: <Link to={`/usersingle/${id}`}>{username}</Link></p>
        </div>
    );
};

export default User;