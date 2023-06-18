import React from 'react';
import '../Components/Home.css'
const Home = () => {
    return (
        <div className="home-container">
      <header>
        <h1>Welcome to Our Website</h1>
      </header>

      <main>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque, reiciendis. Tenetur quas maiores id perferendis, laboriosam vitae repudiandae eaque enim neque, eum, at corrupti quod quo ratione hic nam tempora.</p>
      </main>

      <footer>
        <div className="footer-container">
          <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
          <nav>
            <a href="/">Home</a>
            <a href="/products">Products</a>
            <a href="/contact">Contact</a>
            <a href="/about">About</a>
          </nav>
        </div>
      </footer>
    </div>
    );
};

export default Home;