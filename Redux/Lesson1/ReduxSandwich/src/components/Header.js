import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <img className="logo" src="/assets/Logo.png" alt="logo"/>
      <nav className="nav">
        <NavLink to="/" exact>製作三明治</NavLink>
        <NavLink to="/menu">MENU</NavLink>
        <NavLink to="/orders">購買紀錄</NavLink>
      </nav>
    </header>
  );
}