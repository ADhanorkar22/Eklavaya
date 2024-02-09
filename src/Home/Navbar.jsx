import React from "react";
import {useNavigate} from "react-router-dom";

const MyNavbar = ({onLoginClick,onRegisterClick}) => {
  let navigator = useNavigate() ;
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Product Name on the Left */}
        <a className="navbar-brand text-primary" href="/">
          Eklavya
        </a>

        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
        </form>

        {/* Links in the Middle */}
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <a className="nav-link" href="#info">
                Info
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#feedbacks">
                Feedbacks
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Buttons on the Right */}
        <div className="ml-auto">
          <button
            className="btn btn-outline-primary mr-2"
            onClick={onLoginClick}
          >
            Log In
          </button>
          <button
            className="btn btn-primary ml-5"
            onClick={onRegisterClick}
          >
            Register
          </button>
        </div>
      </div>
    </nav>
  );
};

export default MyNavbar;
