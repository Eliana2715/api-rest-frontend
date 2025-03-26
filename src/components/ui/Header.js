import React from 'react'
import { NavLink } from 'react-router-dom'


export const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <div className="container-fluid">

      <NavLink className="navbar-brand" to="/media">Media</NavLink>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
            <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Activo</NavLink>
            </li>
            <li className="nav-item">
                <NavLink  className="nav-link" to="/director">Directores</NavLink>
            </li>
            <li className="nav-item">
                <NavLink  className="nav-link" to="/productora">Productoras</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/tipo">Tipo</NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/genero">Generos</NavLink>
            </li>
            </ul>
      </div>
    </div>
  </nav>
  )
}

