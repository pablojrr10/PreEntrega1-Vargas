import React from "react";
import CarWidget from "../CarWidget";
import { NavLink } from "react-router-dom";

export const NavBar = () => {
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
        <li className="nav-item dropdown">
          <NavLink className="nav-link dropdown-toggle" data-bs-toggle="dropdown" to='/categoria' role="button" aria-haspopup="true" aria-expanded="false">Categorias</NavLink>
          <div className="dropdown-menu">
            <NavLink className="dropdown-item" to='/categoria'>muebleTV</NavLink>
            <NavLink className="dropdown-item" to='/categoria'>mesaLuz</NavLink>
            <NavLink className="dropdown-item" to='/categoria'>otros</NavLink>
            <div className="dropdown-divider" />
            <NavLink className="dropdown-item" href="#">Separated link</NavLink>
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to='/cart'>
            <CarWidget />
          </NavLink>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-sm-2" type="text" placeholder="Search" />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    );
}
export default NavBar;