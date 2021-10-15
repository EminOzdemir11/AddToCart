import React, { Component } from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

export default class CategoryList extends Component {
  state = {
    categories: []
  };

  componentDidMount(){
    this.getCategories();
  }

  getCategories = () => {
    fetch("http://localhost:3004/categories") 
    .then(response => response.json())
    .then(data =>this.setState({categories:data}));
  }
  // https://jsonplaceholder.typicode.com/users

  render() {
    return (
      <div>
        <h4>{this.props.info.title}</h4>
        <ListGroup>
          {this.state.categories.map((category) => (
            <ListGroupItem active = {category.name===this.props.currentCategory?true:false}
              onClick={() => this.props.changeCategory(category)}
              key={category.id}
            >
              {category.name}
            </ListGroupItem>
          ))}
        </ListGroup>
        {/* <h4>{this.props.currentCategory}</h4> */}
      </div>
    );
  }
}
