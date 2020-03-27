import React,{Component} from "react";
import {Card,Form,Button,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPlusSquare, faUndo} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const iconsFaSave = <FontAwesomeIcon icon={faSave} />
const iconsFaPlusSquare = <FontAwesomeIcon icon={faPlusSquare} />
const iconsFaUndo = <FontAwesomeIcon icon={faUndo} />

export default class Book extends Component {
  
  constructor(props){
      super(props);
      this.state = this.initialState;
      this.bookChange = this.bookChange.bind(this);
      this.submitBook = this.submitBook.bind(this);
  }
  initialState = {
    isName:'', 
    imgURL:''
  }
  resetBook = () => {
    this.setState(() => this.initialState);
  }
  submitBook = event =>{
    event.preventDefault();
    const book = {
      isName: this.state.isName,
      imgURL: this.state.imgURL,
    };
    axios.post("http://localhost:8080/insertUserRole", book)
      .then(response => {     
          console.log(response.data);
          if(response.data != null){
              this.setState(this.initialState);
              alert("Add data is successfully");
          }
      });  
  }
  bookChange = event =>{
    this.setState({
      [event.target.name]:event.target.value
    });
  }

  render() {
    const {isName, imgURL} = this.state;

    return (
      <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>{iconsFaPlusSquare} Add New Book</Card.Header>
        <Form onReset={this.resetBook} onSubmit={this.submitBook} id="bookFormId">
          <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control  required autoComplete="off"
                        type="text" name="isName"
                        value={isName} onChange={this.bookChange}
                        className="bg-dark text-white"
                        placeholder="Enter Your Name"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAuthor">
                    <Form.Label>Image URL.</Form.Label>
                    <Form.Control required autoComplete="off"
                        type="text" name="imgURL"
                        value={imgURL} onChange={this.bookChange}
                        className="bg-dark text-white"
                        placeholder="Enter Image URL."/>
                </Form.Group>
              </Form.Row>
              {/* <Form.Row>
                <Form.Group as={Col} controlId="formGridCoverPhotoURL">
                    <Form.Label>Cover Photo URL</Form.Label>
                    <Form.Control required autoComplete="off"
                        type="text" name="coverPhotoURL"
                        value={coverPhotoURL} onChange={this.bookChange}
                        className="bg-dark text-white"
                        placeholder="Enter Book Cover Photo URL"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridISBNNumber">
                    <Form.Label>ISBN Number</Form.Label>
                    <Form.Control required autoComplete="off"
                        type="text" name="isbnNumber"
                        value={isbnNumber} onChange={this.bookChange}
                        className="bg-dark text-white"
                        placeholder="Enter Book ISBN Number"/>
                </Form.Group>
              </Form.Row> */}

          </Card.Body>
          <Card.Footer style={{"textAlign":"right"}}>
            <Button size="sm" variant="success" type="submit">{iconsFaSave} Submit</Button> {' '}
            <Button size="sm" variant="info" type="reset">{iconsFaUndo} Reset</Button>      
          </Card.Footer>
        </Form>
      </Card>      
    );
  }
}

