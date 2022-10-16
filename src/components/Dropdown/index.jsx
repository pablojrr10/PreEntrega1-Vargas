import React from 'react';
import { NavLink } from "react-router-dom";

const Index = ({lista}) => {
    return (
        <>
            <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Dropdown</a>
          <div className="dropdown-menu">
            <NavLink className="dropdown-item" to='/categoria/muebleTV'>{lista[0]}</NavLink>
            <NavLink className="dropdown-item" to='/categoria/mesaLuz'>{lista[1]}</NavLink>
            <NavLink className="dropdown-item" to='/categoria'>{lista[2]}</NavLink>
            <div className="dropdown-divider" />
            <NavLink className="dropdown-item" href="#">{lista[3]}</NavLink>
          </div>
        </li>
        </>
    );
}

export default Index;
