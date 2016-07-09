import React, { Component } from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';

class NavBar extends Component {

  render() {
    return (
      <section>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">RAW</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav pullRight>
              <NavItem>About</NavItem>
              <NavItem>Developer Guide</NavItem>
              <NavItem>API Reference</NavItem>
              <NavItem>FAQ</NavItem>
              <NavItem>Github</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </section>

    );
  }
}

export default NavBar;