import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light" style={{ backgroundColor: 'gray' }}>
        <div className="container-fluid">
          <Link className="navbar-brand ps-5 text-white" to="/">WELCOME</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active ps-3 text-white" aria-current="page" to="/">HOME</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ps-3 text-white" to="/service">SERVICES</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ps-3 text-white" to="/test">TESTMONIALS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ps-3 text-white" to="/contact">CONTACTS</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ps-3 text-white" to="/about">ABOUT</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link ps-3 text-white" to="portfolio">PORTFOLIO</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}
