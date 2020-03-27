import React, {Component} from "react";
import {Card, Table, Image, ButtonGroup, Button, Toast, Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList, faEdit, faTrash} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const iconsFaList = <FontAwesomeIcon icon={faList} />
const iconsfaEdit = <FontAwesomeIcon icon={faEdit} />
const iconsfaTrash = <FontAwesomeIcon icon={faTrash} />
const api = "http://localhost:8080";
export default class BookList extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      books : []
    };
  }
  componentDidMount(){
    // axios.get("http://localhost:8080/ShowUserRole")
    //   .then(response => console.log(response.data));
    axios.get(api + "/ShowUserRole")
      .then(response => response.data)
      .then((data) => {
        this.setState({books:data});
      });  
  }

  render() {
    return (
        <Card className={"border border-dark bg-dark text-white"}>
            <Card.Header>{iconsFaList} Book List</Card.Header>
            <Card.Body>
              <Table bordered hover striped variant="dark" >
              <thead>
                <tr>
                  <th>#</th>
                  <th>Name</th>
                  <th>ImgURL</th>
                  <th>Image</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.books.length === 0 ?
                  <tr>
                    <td colSpan="6">No Data Available.</td> 
                  </tr> :
                  this.state.books.map((book) => (
                    <tr key={book.id}>
                      <td>{book.id}</td>
                      <td>{book.name}</td>
                      <td>{book.imgURL}</td>
                      <td align="center"><Image src={book.imgURL} roundedCircle width="100" height="100"/></td>
                      <td align="center">
                        <ButtonGroup>
                          <Button variant="primary">{iconsfaEdit}</Button>&nbsp;
                          <Button variant="danger">{iconsfaTrash}</Button>
                        </ButtonGroup>
                      </td>
                    </tr>        
                  )) 
                }
              </tbody>
              </Table>
            </Card.Body>    
            <Card.Body>
              <h1>test</h1>
              <Toast>
                <Toast.Header>
                  <img src="https://sv1.picz.in.th/images/2020/03/27/QA9GQW.png"  className="rounded mr-2" alt=""  roundedCircle width="30" height="30"/>
                  <strong className="mr-auto">Diki kawasaki</strong>
                  <small>11 mins ago</small>
                </Toast.Header>
                <Toast.Body as={Col}>
                  <img src="https://sv1.picz.in.th/images/2020/03/27/QA9GQW.png"  className="mr-auto" alt=""  width="100" height="100"/>
                  <p>Hello, world! This is a toast message.</p>
                </Toast.Body>
              </Toast>
            </Card.Body>      
        </Card>
       
    );
  }
}

