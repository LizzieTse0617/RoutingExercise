import React from 'react';
import { Link } from 'react-router-dom';
import Home from '../Home/Home';
import './NotFound.css';
export default function NotFound() {
  return (
    <main className="NotFound">
      <h2>404</h2>
      <p>OPPS! PAGE NOT FOUND</p>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" element={<Home />}>
        Return to homepage
      </Link>
    </main>
  );
}
