import React from 'react';
import { NavLink } from 'react-router-dom';

const HeaderBarBrand = () => (
  <div className="navbar-brand">
    <a
      className="navbar-item"
      href="https://reactjs.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className="fab js-logo fa-react fa-2x" aria-hidden="true" />
    </a>
    <NavLink to="/" className="navbar-item nav-home">
      <span className="brand-first">KJELL</span>
      <span className="brand-second">MAEKELBERG</span>
      <span className="brand-third">SHOPPING LIST</span>
    </NavLink>
  </div>
);

export default HeaderBarBrand;
