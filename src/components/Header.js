import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">Froker</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
      </div>
    </nav>
  );
}

export default Header;
