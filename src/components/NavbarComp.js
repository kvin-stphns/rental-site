import React, { Component } from 'react'
import {
        Collapse,
        Navbar,
        NavbarToggler,
        Nav,
        NavItem,
        NavLink,
        NavbarBrand,
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem,
} from 'reactstrap';
import logo from "../images/exotic-car-icon-removebg.png"


export class NavbarComp extends Component {
        render() {
                return (
                        <div className="nav">
                                <Navbar className="light px-5" fixed="top" color="light" light expand="md">
                                        <NavbarBrand className="px-5" href="/"><img src={logo} alt="Logo" style={{ height: '8vh', onLoad: 'fadeIn' }} />Exotic Rental Club</NavbarBrand>
                                        <NavbarToggler />
                                        <Collapse navbar>
                                                <Nav navbar className="ml-auto px-5">
                                                        <NavItem>
                                                                <NavLink>Rentals</NavLink>
                                                        </NavItem>
                                                        <NavItem>
                                                                <NavLink>Memberships</NavLink>
                                                        </NavItem>
                                                        <UncontrolledDropdown nav inNavbar>
                                                                <DropdownToggle nav caret>
                                                                        Pricing
                                                                </DropdownToggle>
                                                                <DropdownMenu right>
                                                                        <DropdownItem>
                                                                                Option 1
                                                                        </DropdownItem>
                                                                        <DropdownItem>
                                                                                Option 2
                                                                        </DropdownItem>
                                                                </DropdownMenu>
                                                        </UncontrolledDropdown>
                                                </Nav>
                                        </Collapse>
                                </Navbar>

                        </div>
                )
        }
}

export default NavbarComp