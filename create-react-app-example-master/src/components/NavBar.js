import React, {Component} from "react";
import {Navbar,Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
        <Navbar  bg="dark" variant="dark">
            <Link to={""} className="navbar-brand">
                <img src="https://sv1.picz.in.th/images/2020/03/26/Qo2WRW.png" width="30" height="30" alt="brand"/> NEW BABY SHOP  
            </Link>                   
            <Nav className="mr-auto">
                <Link to={"AddProduct"} className="nav-link">Add Product</Link>
                <Link to={"ProductList"} className="nav-link">Product List</Link>
            </Nav>
            {/* <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form> */}
        </Navbar>

    );
  }
}

