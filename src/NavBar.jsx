import { Link, NavLink } from "react-router-dom";
import { Nav, NavItem } from "reactstrap";
import "./NavBar.css";

/** Top navigation bar for site. */

function NavBar() {
  console.log("* NavBar");

  return (
    <nav className="NavBar navbar navbar-expand-md">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Alice's Cafe
        </Link>
        <Nav className="ms-auto" navbar>
          <NavItem><NavLink to="/snacks">Snacks</NavLink> </NavItem>
          <NavItem><NavLink to="/drinks">Drinks</NavLink></NavItem>
          <NavItem> <NavLink to="/add-item">Add Item</NavLink></NavItem>
        </Nav>
      </div>
    </nav>
  );
}

export default NavBar;