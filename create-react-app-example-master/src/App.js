import React, { Component } from "react";
import "./App.css";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import NevBar from './components/NavBar';
import { Container, Row, Col} from "react-bootstrap";
import Welcome from "./components/Welcome";
import Footer from "./components/Footer";
import Book from "./components/Book";
import BookList from "./components/BookList";

const marginTop = {
  marginTop:"20px"
};

class App extends Component {

  render() {
    return (
      <Router>
        <NevBar/>
        <Container>
          <Row>
            <Col lg={12} style={marginTop}>
              <Switch>
                <Route path="/" exact component={Welcome}/>
                <Route path="/AddBook" exact component={Book}/>
                <Route path="/BookList" exact component={BookList}/>
              </Switch>
            </Col>
          </Row>
        </Container>
        <Footer/>
      </Router>
    );
  }
}

export default App;
