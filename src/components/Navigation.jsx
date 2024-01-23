import { Context } from "../states/GlobalContext";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid container">
        <Link to={"/#home"} className="navbar-brand">
          <img src="src\assets\img\my_logo\my_logo.png" alt="DIVANO" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link to={"/#home"} className="nav-link">
              Home
            </Link>
            <Link to={"/#gallery"} className="nav-link">
              Projects
            </Link>
            <Link className="nav-link" to={"/about"}>
              About
            </Link>
            <Link to={"/#contact"} className="nav-link">
              Contact
            </Link>
          </div>
        </div>
        <div className="navbar-nav nav-social">
          <div className="facebook">
            <a className="fb-empty">
              <img
                src="./src/assets/img/icons/fb-empty.png"
                alt="facebook"
                className="fb-empty"
              />
            </a>
            <a className="fb-full">
              <img
                src="./src/assets/img/icons/fb-full.png"
                alt="facebook"
                className="fb-full"
              />
            </a>
          </div>
          <div className="linked-in">
            <a className="li-empty">
              <img
                src="./src/assets/img/icons/linked-empty.png"
                alt="linked-in"
                className="li-empty"
              />
            </a>
            <a className="li-full">
              <img
                src="./src/assets/img/icons/linked-full.png"
                alt="linked-in"
                className="li-full"
              />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
