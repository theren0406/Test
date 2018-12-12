import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header(props) {
  return (
    <header>
      <img className="logo" src="/assets/Logo.png" alt="logo"/>
      <nav className="nav">
        {/* <a href="" >MENU</a>
        <a href="" >製作三明治</a>
        <a href="" >結帳</a>
        <a href="" >購買紀錄</a> */}
        <NavLink to="/" exact>製作三明治</NavLink>
        <NavLink to="/menu" activeClassName="active">MENU</NavLink>
        <NavLink to="/orders">購買紀錄</NavLink>
      </nav>
    </header>
  );
}