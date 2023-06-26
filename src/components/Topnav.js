import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import '../App.css';

function Topnav() {
  return (
    <Navbar expand="lg"  className="bg-body-tertiary navbar-custom ">
      <Container fluid>
        <a class="navbar-brand custom" href="#">
          <div className="logoimg"></div>
          {/* <img
            src="../images/kitabook-logo.png"
            width="30"
            height="30"
            class="d-inline-block align-top"
            alt=""
          /> */}
        </a>
        {/* <Navbar.Brand href="#">KitaBook</Navbar.Brand> */}
        <Navbar.Toggle className="custom" aria-controls="navbarScroll" />
        <Navbar.Collapse className="custom"  id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0 text-bg-dark custom" navbarScroll>
            <Nav.Link className="custom" href="/login">Signin</Nav.Link>
            <Nav.Link  className="custom"href="/signup">Register</Nav.Link>
          </Nav>
          {/* <div className="d-flex">
            <Button variant="outline-primary">Get Started</Button>
          </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Topnav;
