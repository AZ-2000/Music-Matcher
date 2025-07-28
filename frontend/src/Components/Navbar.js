
import React from "react";
import "./Navbar.css";
import musicIcon from "./music1.png"
import { Link } from "react-router-dom";
export default function Navbar()
{
    return (
    <>
    <nav className="navbar custom-navbar">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src={musicIcon} alt="Music Matcher" height="40" width="40" />
</a>
    <Link to="/find-your-song" className="nav-link fs-5">
    Find your song!
    </Link>

    <div className="d-flex ms-auto px-3">
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <i className="fab fa-linkedin fa-2x"></i>
          </a>
        <a
            href="https://github.com/yourusername/yourrepo"
            target="_blank"
            rel="noopener noreferrer"
            className="icon-link"
          >
            <i className="fab fa-github fa-2x"></i>
          </a>
          
    </div>
    {/* <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form> */}
  </div>
</nav>
</>
    )
}