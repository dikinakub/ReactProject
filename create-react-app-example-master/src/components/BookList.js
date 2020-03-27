import React, {Component} from "react";
import {Card, Table} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faList} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const iconsFaList = <FontAwesomeIcon icon={faList} />

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
    axios.get("http://localhost:8080/ShowUserRole")
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

