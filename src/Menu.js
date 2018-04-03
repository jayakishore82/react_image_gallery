import React from 'react';
import {NavLink} from 'react-router-dom'

const Menu = () => (
      <nav className="main-nav">
        <ul>
          <li><NavLink to='/search/cats'>Cats</NavLink></li>
          <li><NavLink to='/search/dogs'>Dogs</NavLink></li>
          <li><NavLink to='/search/rainbow'>Rainbow</NavLink></li>
          <li><NavLink exact to='/search'>Search</NavLink></li>
        </ul>
      </nav>
);

export default Menu;
