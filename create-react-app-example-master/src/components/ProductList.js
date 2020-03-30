import React, {Component} from "react";
import {Card, Table, Image, ButtonGroup, Button, Col,Form,FormControl} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import {Link} from 'react-router-dom';

const iconsFaList = <FontAwesomeIcon icon={faList} />
const iconsfaEdit = <FontAwesomeIcon icon={faEdit} />
const iconsfaTrash = <FontAwesomeIcon icon={faTrash} />
const api = "http://localhost:8080";
export default class ProductList extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      books : []
    };
  }

  componentDidMount(){
    // axios.get("http://localhost:8080/ShowProductStock")
    //   .then(response => console.log(response.data));
    axios.get(api + "/ShowProductStock")
      .then(response => response.data)
      .then((data) => {
        this.setState({books:data});
        console.log(data);
      });  
  }

  deleteProduct = (productId) => {
     axios.delete(api + "/deleteProductStock/"+productId)
          .then(response => {
              alert("Delete product successfull.");
              this.setState({
                  books: this.state.books.filter(book => book.productId !== productId)
              });
          });
  };

  render() {
    return (
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>
            <Form.Row>
                <Form.Group as={Col}>
                    {iconsFaList} Product List
                </Form.Group>
                <Form.Group style={{"textAlign":"right"}}>
                    <FormControl type="text" placeholder="Search"  className="mr-sm-2"/>
                    {/* <Button variant="outline-info">Search</Button>  */}
                </Form.Group>
              </Form.Row>

            </Card.Header>
            <Card.Body>
              <Table bordered hover striped variant="dark" >
              <thead>
                <tr>
                  <th>#</th>
                  <th align="center">Image</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.books.length === 0 ?
                  <tr align="center">
                    <td colSpan="6">No Data Available.</td> 
                  </tr> :
                  this.state.books.map((book) => (
                    <tr key={book.productId}>
                      <td>{book.productId}</td>
                      <td align="center">
                        <Image src={book.imageURL}  width="100" height="100" rounded />                     
                      </td>
                      <td>{book.productName}</td>
                      <td>{book.price}</td>                    
                      <td align="center">
                        <ButtonGroup>
                          <Link to={"editProduct/"+book.productId} className="btn btn-outline-primary">{iconsfaEdit}</Link>{' '}
                          <Button variant="outline-danger" onClick={this.deleteProduct.bind(this,book.productId)}>{iconsfaTrash}</Button>
                        </ButtonGroup>
                      </td>
                    </tr>        
                  )) 
                }
              </tbody>
              </Table>
            </Card.Body>        
        </Card>
       
    );
  }
}

