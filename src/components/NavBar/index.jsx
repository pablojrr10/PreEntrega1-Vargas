import React from "react";
import CarWidget from "../CarWidget";
import Form from "../Form";
import Dropdown from "../Dropdown";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const listDropdown = ["Muebles Tv", "Mesa de Luz", "Escritorios"]
    return(

  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to='/'>Makers</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarColor01">
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" to='/'>Home
            <span className="visually-hidden">(current)</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/'>Productos</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/categoria/muebleTV'>muebleTV</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/categoria/mesaLuz'>mesaLuz</NavLink>
        </li>
        <Dropdown lista = {listDropdown}/>
        <li className="nav-item">
          <NavLink className="nav-link" to='/cart'>
            <CarWidget />
          </NavLink>
        </li>
      </ul>
        <Form/>
    </div>
  </div>
</nav>
    );
}
export default NavBar;