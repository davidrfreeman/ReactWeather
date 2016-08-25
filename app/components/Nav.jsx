import React from 'react';
import {Link, IndexLink} from 'react-router';
import WeatherForm from 'WeatherForm';

const Nav = () => {

  return (
    <div className="top-bar">
      <div className="top-bar-left">
      <ul className="menu">
        <li><IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Weather</IndexLink></li>
        <li><Link to="/about" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>About</Link></li>
        <li><Link to="/examples" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Examples</Link></li>
      </ul>
    </div>
  </div>
  );
};

export default Nav;
