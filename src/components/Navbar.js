import React from "react";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          {props.title}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about.js">
                {props.aboutText}
              </a>
            </li>
          </ul>
          {/* <div class="form-check form-switch">
            <input class="form-check-input" onClick={()=>{props.toggleMode('#04235c')}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label class="form-check-label" for="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div> */}
          {/* <div className="bg-dark rounded mx-3" onClick={()=>{props.toggleMode('#04235c')}} style={{height: '40px', width: '40px', cursor: 'pointer', border: '2px solid #04235c'}}></div>
          <div className="bg-light rounded mx-3" onClick={()=>{props.toggleMode('light')}} style={{height: '40px', width: '40px', cursor: 'pointer', border: '2px solid #04235c'}}></div> */}

          <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.mode==='light'?"Enable Dark Mode":"Enable Light Mode"}</label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};

Navbar.defaultProps = {
  title: 'Set title here',
  aboutText: 'Set about here'
};