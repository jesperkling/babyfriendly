import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { BiSolidUser } from "react-icons/bi";
import logo from "../logo.svg";

const Header = () => {
  return (
    <Navbar bg="light" variant="light p-0">
      <Navbar.Brand href="/" className="mx-auto text-warning">
        <img src={logo} alt="logo" />
        BabyFriendly
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
