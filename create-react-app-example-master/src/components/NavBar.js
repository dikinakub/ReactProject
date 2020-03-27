import React, {Component} from "react";
import {Navbar,Nav,FormControl,Button,Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default class NavBar extends Component {
  render() {
    return (
        <Navbar  bg="dark" variant="dark">
            <Link to={""} className="navbar-brand">
                <img src="https://sv1.picz.in.th/images/2020/03/26/Qo2WRW.png" width="30" height="30" alt="brand"/> NEW BABY  
            </Link>                   
            <Nav className="mr-auto">
                <Link to={"AddBook"} className="nav-link">Add Book</Link>
                <Link to={"BookList"} className="nav-link">Book List</Link>
            </Nav>
            <Form inline>
                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                <Button variant="outline-info">Search</Button>
            </Form>
        </Navbar>
    );
  }
}

