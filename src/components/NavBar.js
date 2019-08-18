import React, { Component } from "react";
import { Navbar, Nav, Link } from "react-bootstrap";
import { connect } from "react-redux";
import { notesClick } from "../actions/index";

class NavBar extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg" style={{ zIndex: "200" }}>
        <Navbar.Brand href="/" className="justify-content-md-center">
          Notes
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav className="justify-content-end">
            <Nav.Link onClick={() => this.props.notesClick({ boolean: true })}>
              Add new note
            </Nav.Link>
            <Nav.Link href="/settings">Settings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    notesClick: boolean => dispatch(notesClick(boolean))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(NavBar);
