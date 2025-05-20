import React from "react";

import { NavLink } from "react-router-dom";

import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/">WorkLog</NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/register">Cadastrar Novo Colaborador</NavLink>
        </li>
        <li>
          <NavLink to="/about">Logout</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
