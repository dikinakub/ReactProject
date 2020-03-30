import React,{Component} from "react";
import {Card,Form,Button,Col} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPlusSquare, faUndo, faList, faEdit} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
// import MyToast from './MyToast';

const iconsFaSave = <FontAwesomeIcon icon={faSave} />
const iconsFaPlusSquare = <FontAwesomeIcon icon={faPlusSquare} />
const iconsFaUndo = <FontAwesomeIcon icon={faUndo} />
const iconsFaList = <FontAwesomeIcon icon={faList} />
const iconsFaEdit = <FontAwesomeIcon icon={faEdit} />

const api = "http://localhost:8080";

export default class AddProduct extends Component {
  
  constructor(props){
      super(props);
      this.state = this.initialState;
      this.state.show = true;
      this.bookChange = this.bookChange.bind(this);
      this.submitBook = this.submitBook.bind(this);
  }

  initialState = {
    id:'',
    productName:'', 
    imgURL:'',
    price:''
  };

  resetBook = () => {
    this.setState(() => this.initialState);
  };

  componentDidMount(){
    const productId = +this.props.match.params.id;
    if(productId){
        this.findProductById(productId);
    }
  };

  findProductById = (productId) =>{
      axios.get(api +"/getProductStockById/"+productId)
        .then(response => {
            if(response.data != null){
                this.setState({
                    id: response.data.productId,
                    productName: response.data.productName,
                    imgURL: response.data.imageURL,
                    price: response.data.price
                });
            }              
        }).catch((error) => {
            console.log("Error - "+error);
        });
  };

  submitBook = event =>{
    event.preventDefault();
    const book = {
      productName: this.state.productName,
      imgURL: this.state.imgURL,
      price: this.state.price,
    };
    axios.post(api + "/insertProductStock", book)
      .then(response => {     
          console.log(response.data);
          alert("Add Product Successfully.");
          if(response.data != null){
            this.setState({"show":true});
            setTimeout(() => this.setState({"show":false}),3000);
          }else{
            this.setState({"show":false});
          }
      });  
      this.setState(this.initialState);
  };

  updateProduct = event =>{
    event.preventDefault();
    const product = {
      id:this.state.id,
      productName: this.state.productName,
      imgURL: this.state.imgURL,
      price: this.state.price,
    };
    // console.log(product);
    axios.put(api + "/updateProductStock", product)
      .then(response => {     
          console.log(response.data);
          alert("Add Product Successfully.");
          if(response.data != null){
            this.setState({"show":true});
            setTimeout(() => this.setState({"show":false}),3000);
            setTimeout(() => this.productList(),300);
          }else{
            this.setState({"show":false});
          }
      });  
      this.setState(this.initialState);
  };

  bookChange = event =>{
    this.setState({
      [event.target.name]:event.target.value
    });
  };

  productList = () => {
    return this.props.history.push("/ProductList");
  };

  render() {
    const {productName, price, imgURL} = this.state;

    return (
      <div>
        {/* <div styte={{"display":this.state.show ? "block":"none"}}>
            <MyToast children={{show:this.state.show , message:"Add Product Successfully."}}/>
        </div> */}
        <Card className={"border border-dark bg-dark text-white"}>
        <Card.Header>{this.state.id ? iconsFaEdit:iconsFaPlusSquare} {this.state.id ?"Update Product":"Add New Product"}</Card.Header>
        <Form onReset={this.resetBook} onSubmit={this.state.id ? this.updateProduct:this.submitBook} id="bookFormId">
          <Card.Body>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridTitle">
                    <Form.Label>Name</Form.Label>
                    <Form.Control  required autoComplete="off"
                        type="text" name="productName"
                        value={productName} onChange={this.bookChange}
                        className="bg-dark text-white"
                        placeholder="Enter Your Name"/>
                </Form.Group>
                <Form.Group as={Col} controlId="formGridAuthor">
                    <Form.Label>Sale Price</Form.Label>
                    <Form.Control required autoComplete="off"
                        type="number" name="price"
                        value={price} onChange={this.bookChange}
                        className="bg-dark text-white"
                        placeholder="Enter Price"/>
                </Form.Group>
              </Form.Row>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridAuthor">
                    <Form.Label>Image URL.</Form.Label>
                    <Form.Control required autoComplete="off"
                        type="text" name="imgURL"
                        value={imgURL} onChange={this.bookChange}
                        className="bg-dark text-white"
                        placeholder="Enter Image URL."/>
                </Form.Group>
               </Form.Row> 

          </Card.Body>
          <Card.Footer style={{"textAlign":"right"}}>
      <Button size="sm" variant="success" type="submit">{iconsFaSave} {this.state.id ?"Update":"Save"}</Button> {' '}
            <Button size="sm" variant="info" type="reset">{iconsFaUndo} Reset</Button> {' '}   
            <Button size="sm" variant="info" type="reset" onClick={this.productList.bind()}>{iconsFaList} Product List</Button>      
          </Card.Footer>
        </Form>
      </Card>
      </div>

            
    );
  }
}

