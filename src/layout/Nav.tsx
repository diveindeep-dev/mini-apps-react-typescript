import React from 'react';
import { Link } from 'react-router-dom';
import { navs } from '../config';

function Nav() {
  return (
    <nav>
      {navs.map((nav, i) => (
        <li key={i}>
          <Link to={nav.link}>{nav.name}</Link>
        </li>
      ))}
    </nav>
  );
}

export default Nav;
