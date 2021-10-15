import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText
} from 'reactstrap';
import CartSummary from '../cart/CartSummary';

export default class Navi extends Component {
    render() {
        return (
            <div>
              <Navbar color="light" light expand="md">
                <NavbarBrand><Link to="/">NORTHWIND</Link></NavbarBrand>
                <NavbarToggler/>
                <Collapse navbar>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink>
                        <Link to="/saveproduct">Ürün ekle</Link>
                      </NavLink>
                    </NavItem>
                    <CartSummary/>
                  </Nav>
                  <NavbarText>Simple Text</NavbarText>
                </Collapse>
              </Navbar>
            </div>
          );
    }
}
