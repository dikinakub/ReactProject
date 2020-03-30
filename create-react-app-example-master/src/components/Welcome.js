import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from "react";
import { Card, Col, Form, FormControl, ListGroup ,ListGroupItem} from "react-bootstrap";

const iconsFaShoppingCart = <FontAwesomeIcon icon={faShoppingCart} />


export default class Welcome extends Component {
  render() {
    return (
      <Card className={"border border-dark bg-dark text-white"}>
          <Card.Header className="text-white">{iconsFaShoppingCart} Payment</Card.Header>
          <Card.Body>
            <Form>
              <Form.Row>
                <Form.Group as={Col} >
                  <FormControl type="text" placeholder="Enter Product Code"></FormControl>                   
                </Form.Group>
              </Form.Row>
            </Form>
            
            </Card.Body>
          <Card.Footer>
          <ListGroup className="list-group-flush">
              <ListGroupItem>
              
              </ListGroupItem>
              <ListGroupItem>
              
              </ListGroupItem>
              <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
          </Card.Footer>
      </Card>

    );
  }
}

