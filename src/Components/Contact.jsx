import React from 'react';
import '../Components/Contact.css'
const Contact = () => {
    
    return (
        <form  className="contact-form">
        <h2>Contact Us</h2>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Your Name"
           
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Your Email"
            
           
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            placeholder="Your Message"
          
            required
          ></textarea>
        </div>
        <button className='btn' type="submit">Submit</button>
      </form>
    );
};

export default Contact;