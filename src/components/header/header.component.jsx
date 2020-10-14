import React from 'react';
import './header.styles.css';
import logo from '../../photos/logo.webp';
export const Header = ({clsName}) => (
  <nav className={clsName}>
    <div>
      <a className="navbar-brand" href="/">
        <img src={logo} alt="logo" />
      </a>
    </div>

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
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <a className="nav-link" href="/">
            HOME
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/">
            TOURS
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/">
            ABOUT
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/">
            GALLERY
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/">
            BLOG
          </a>
        </li>
        <li className="nav-item active">
          <a className="nav-link" href="/">
            CONTACTS
          </a>
        </li>
      </ul>
    </div>
  </nav>
);
