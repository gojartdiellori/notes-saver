import React, { Component } from "react";
import { Navbar, Nav, Link } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="/" className="justify-content-md-center">
          Notes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link onClick={this.props.triggerButton}>Add new note</Nav.Link>
            <Nav.Link href="/settings">Settings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
