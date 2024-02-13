import { Context } from "../states/GlobalContext";
import { Link, useLocation } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "../nav-assets/img/my_logo/my_logo.png";
import Fbfull from "../nav-assets/img/icons/fb-full.png";
import Fbempty from "../nav-assets/img/icons/fb-empty.png";
import Lifull from "../nav-assets/img/icons/linked-full.png";
import Liempty from "../nav-assets/img/icons/linked-empty.png";

const Navigation = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand>
          <Link to={"/#home"} className="navbar-brand">
            <img src={Logo} alt="DIVANO" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
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
          </Nav>
          <Nav className="nav-social">
            <div className="facebook">
              <Link className="fb-empty">
                <img src={Fbempty} alt="facebook" className="fb-empty" />
              </Link>
              <Link
                className="fb-full"
                to="https://www.facebook.com/dusan.ivanovic.33"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Fbfull} alt="facebook" className="fb-full" />
              </Link>
            </div>
            <div className="linked-in">
              <Link className="li-empty">
                <img src={Liempty} alt="linked-in" className="li-empty" />
              </Link>
              <Link
                className="li-full"
                to="https://www.linkedin.com/in/du%C5%A1an-ivanovi%C4%87-61b950160/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={Lifull} alt="linked-in" className="li-full" />
              </Link>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
