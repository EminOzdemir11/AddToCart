import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as productActions from "../../redux/actions/productActions";
import * as cartActions from "../../redux/actions/cartActions";
import { Table, Button } from "reactstrap";
import alertify from "alertifyjs"
import {Link} from "react-router-dom"

class ProductList extends Component {
  componentDidMount() {
    this.props.actions.getProducts();
  }
  addToCart = (product) => {
    this.props.actions.addToCart({quantity:1,product})
    alertify.success(product.name + " sepete eklendi")
  }
  render() {
    return (
      <div>
        <h3>Products -{this.props.currentCategory.name}</h3>
        <Table>
          <thead>
            <tr>
              <th>Id</th>
              <th>category Id</th>
              <th>Product Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.props.products.map((product) => (
              <tr key={product.id}>
                <th scope="row">{product.id}</th>
                <td>{product.categoryId}</td>
                <td><Link to={"/saveproduct/"+product.id}>{product.name}</Link> </td>
                <td>
                  <Button color="success" onClick={()=>this.addToCart(product)}>
                    Sepete ekle
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    currentCategory: state.changeCategoryReducer,
    products: state.productListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getProducts: bindActionCreators(productActions.getProducts, dispatch),
      addToCart:  bindActionCreators(cartActions.addToCart, dispatch)
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);
