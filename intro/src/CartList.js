import React, { Component } from 'react'
import { Table, Button } from 'reactstrap'

export default class CartList extends Component {
    renderCart(){
        return (
            <Table striped>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Category Id</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.cart.map(cartItem => (
                            <tr key = {cartItem.product.id}>
                                <td>{cartItem.product.id}</td>
                                <td>{cartItem.product.categoryId}</td>
                                <td>{cartItem.product.name}</td>
                                <td>{cartItem.quantity}</td>
                                <td>
                                    <Button color="danger" onClick ={()=>this.props.removeFromCart(cartItem.product)}>Remove</Button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        )
    }
    render() {
        
        return (
            <div>
                {this.renderCart()}
            </div>
        )
    }
}
