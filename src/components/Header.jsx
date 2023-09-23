import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiSolidUser } from "react-icons/bi";
import logo from "../logo.svg";
import "../index.css";

const Header = () => {
  return (
    <Navbar bg="light" variant="light p-0">
      <Navbar.Brand href="/" className="mx-auto fw-bold coloured-text">
        <img src={logo} alt="logo" className="d-inline" />
        Babyfriendly
      </Navbar.Brand>
      <Nav>
        <Nav.Link href="/" className="h-100 bg-warning text-success">
          <BiSolidUser className="me-2 text-success" />
          Log in
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Header;
