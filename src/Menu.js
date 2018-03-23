import React from 'react';
import {NavLink} from 'react-router-dom'

const Menu = () => (
      <nav class="main-nav">
        <ul>
          <li><NavLink to='/cats'>Cats</NavLink></li>
          <li><a href='#'>Dogs</a></li>
          <li><a href='#'>Computers</a></li>
          <li><NavLink to='/search'>Search</NavLink></li>
        </ul>
      </nav>
);

export default Menu;
