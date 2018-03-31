import React from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';




class Navigation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
            isWideEnough: false,
            dropdownOpen: false
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="primary-color-dark" dark expand="md" scrolling>
                    <NavbarBrand href="/">
                        <strong>Navbar</strong>
                    </NavbarBrand>
                    { !this.state.isWideEnough && <NavbarToggler onClick = { this.onClick } />}
                    <Collapse isOpen = { this.state.collapse } navbar>
                        <NavbarNav className="ml-auto" left>
                          <NavItem active>
                              <NavLink className="nav-link" to="/">Home</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to="/About">About</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to="/Services">Services</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to="/Portfolio">Portfolio</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to="/Contact">Contact</NavLink>
                          </NavItem>
                          <NavItem>
                              <NavLink className="nav-link" to="/SocialMedia">Social Media</NavLink>
                          </NavItem>
                          <NavItem>
                              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                              <DropdownToggle nav caret>Dropdown</DropdownToggle>
                              <DropdownMenu>
                                  <DropdownItem href="#">Action</DropdownItem>
                                  <DropdownItem href="#">Another Action</DropdownItem>
                                  <DropdownItem href="#">Something else here</DropdownItem>
                                  <DropdownItem href="#">Something else here</DropdownItem>
                              </DropdownMenu>
                              </Dropdown>
                          </NavItem>
                        </NavbarNav>
                        <NavbarNav right>
                          <NavItem>
                            <form className="form-inline md-form mt-0">
                              <input className="form-control mr-sm-2 mb-0 text-white" type="text" placeholder="Search" aria-label="Search"/>
                            </form>
                          </NavItem>
                        </NavbarNav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Navigation
