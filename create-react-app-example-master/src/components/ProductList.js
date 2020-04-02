import React, {Component} from "react";
import {Card, Table, Image, ButtonGroup, Button, Col,Form,FormControl,OverlayTrigger,Tooltip} from 'react-bootstrap';
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
      books : [],
      dataSearch:[]
    };
  }

  componentDidMount(){
    // axios.get("http://localhost:8080/ShowProductStock")
    //   .then(response => console.log(response.data));
    axios.get(api + "/ShowProductStock")
      .then(response => response.data)
      .then((data) => {
        this.setState({books:data});
        //console.log(data);
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

  SearchProduct = () =>{
    const searchData = this.state.searchData;
    //console.log(searchData);
    axios.get(api + "/searchProduct/"+searchData)
    .then(response => response.data)
    .then((data) => {
      this.setState({books:data});
      //console.log(data);
    });  
  };

  searchDataChange = event =>{
    this.SearchProduct();
    this.setState({
      [event.target.name]:event.target.value
    });
  };

  render() {
    const {searchData} = this.state;
    return (
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>
             
                <Form.Row>
                  <Form.Group as={Col}>
                      {iconsFaList} Product List
                  </Form.Group>
                  <Form.Group style={{"textAlign":"right"}}>
                      <FormControl type="text" 
                        placeholder="Search" 
                        className="mr-sm-2" 
                        name="searchData"
                        value = {searchData}
                        onChange={this.searchDataChange}/>
                      {/* <Button variant="outline-info">Search</Button>   */}
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
                          <OverlayTrigger  placement="left" overlay={<Tooltip >Edit this product!</Tooltip>}>
                            <Link to={"editProduct/"+book.productId} className="btn btn-outline-primary">{iconsfaEdit}</Link>
                          </OverlayTrigger>
                          <OverlayTrigger  placement="right" overlay={<Tooltip  >Delete this product!</Tooltip>}>
                            <Button variant="outline-danger" onClick={this.deleteProduct.bind(this,book.productId)}>{iconsfaTrash}</Button>
                          </OverlayTrigger>
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

