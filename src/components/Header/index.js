import React from 'react';
//import {Link} from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import logoImg from "../../assets/logo.svg";

import "./styles.css";

export default function Header() {
  return(
    <header className="header">
      <div className="container">
        <img src={logoImg} alt="GaragemBox"/>
        <button type="button" className="button">
          Buscar oficinas
          <FiSearch size={20} color="#fff"/>
        </button>
      </div>
      
    </header>
  )
}
