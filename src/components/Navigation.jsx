import { useContext } from "react";
import { Context } from "../states/GlobalContext";

const Navigation = () => {
  const { fbSrc, setFbSrc, liSrc, setLiSrc } = useContext(Context);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid container">
        <a className="navbar-brand" href="#">
          <img src="src\assets\img\my_logo\my_logo.png" alt="DIVANO" />
        </a>
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
            <a className="nav-link" aria-current="page" href="#">
              Projects
            </a>
            <a className="nav-link" href="#">
              About
            </a>
            <a className="nav-link" href="#">
              Contact
            </a>
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
