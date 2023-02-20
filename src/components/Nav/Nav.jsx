import React from "react";
import "../Nav/Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="NavBar">
      <div>
        <Link to="/" className="link">
        <i class="fa-solid fa-house"></i> Home
        </Link>
      </div>
      <div>
        <Link to="/menu" className="link">
        <i class="fa-solid fa-utensils"></i> Menu
        </Link>
      </div>
      <div>
        <Link to="/contacto" className="link">
        <i class="fa-solid fa-address-book"></i> Contacto
        </Link>
      </div>
      <div>
      </div>
    </div>
  );
};

export default Nav;
