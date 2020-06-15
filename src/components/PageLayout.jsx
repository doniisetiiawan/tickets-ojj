/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import {
  Collapse,
  Container,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap';

const PageLayout = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">EIS</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/profile">Profile</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Help Desk
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem href="/newticket">
                  New Ticket
                </DropdownItem>
                <DropdownItem href="/alltickets">
                  View Tickets
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
      <Container className="themed-container">
        <h1>Welcome to EIS</h1>
        <hr />
        <div className="row">
          <div className="col-md-12 col-lg-12">
            {props.children}
          </div>
        </div>
      </Container>
    </>
  );
};

export default PageLayout;
