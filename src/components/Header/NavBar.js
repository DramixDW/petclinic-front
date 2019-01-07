import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import {Link} from "react-router-dom";

export default class NavBarElement extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div >
                <Navbar color="light"  className="navtest" light expand="md">
                    <NavbarBrand className="navcolor" href="/">My Petclinic</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Link className="nav-link navcolor navbutton" to="/">Home</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link navcolor navbutton" to="/vets">Vets</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link navcolor navbutton" to="/owners/find">Find owner</Link>
                            </NavItem>
                            <NavItem>
                                <Link className="nav-link navcolor navbutton" to="/">Error</Link>
                            </NavItem>

                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}