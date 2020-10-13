import React from 'react';
import './header.styles.css';
export const Header = () => (
  <nav className="navbar navbar-expand-md navbar-light bg-light fix-top" >
    <a className="navbar-brand" href >
    <span className="material-icons icon-1">room_service</span>
    </a>
    
    <button
      className="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse right" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="#head">
            Home 
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#about">
            About
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#gallery">
            Gallery
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#recipes">
            Recipes
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="#contact">
            Contact
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
