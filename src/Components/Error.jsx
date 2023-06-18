import React from 'react';
import '../Components/Error.css'
const Error = () => {
    return (
        <div className="error-container">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Oops! The page you are looking for does not exist.</p>
      <a href="/">Go back to home</a>
    </div>
    );
};

export default Error;