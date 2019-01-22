import React, { Component } from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

class NavHeader extends Component{
    state = { isOpen: false };

    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    render(){
        return(
            <header>
                <Navbar color="secondary" light expand="md">
                    <NavbarBrand href="/" className="mr-auto text-white">NoteSpark</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="mr-2"/>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink className="text-white" href="/components/">Components</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink className="text-white" href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </header>
        )
    }
}

export default NavHeader;