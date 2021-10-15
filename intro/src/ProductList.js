import React, { Component } from "react";
import {Button, Table} from 'reactstrap';

export default class ProductList extends Component {

    

  render() {
    return (
      <div>
        <h4>
          {this.props.info.title} - {this.props.currentCategory}
        </h4>
        <Table>
          <thead>
            <tr> 
              <th>Id</th>
              <th>Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
          {this.props.products.map((product) => (
            <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.name}</td>
                <td><Button onClick={()=>this.props.addToCart(product)} color="info">Add to Cart</Button></td>
            </tr>
          ))}
            <tr>
              
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}
