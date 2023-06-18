import React from 'react';
import { useLoaderData } from 'react-router-dom';
import User from './User';
import '../Components/Products.css'
const Products = () => {
    const users = useLoaderData()
   
    return (
        <div className='grid'>
            {
                users.map( user => <User key={user.id} user={user}></User> )
            }
        </div>
    );
};

export default Products;