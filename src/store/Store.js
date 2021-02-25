import { Component } from "react";
import Shoes from "./Shoes.js";
import Cart from "./Cart.js";

import "./Store.css";

class Store extends Component {
  constructor(props) {
    super(props);
    this.state = { shoes: [], cartItems: [] };
    this.addItem = this.addItem.bind(this);
  }

  addItem(item) {
    let items = this.state.cartItems;
    let iItem = items.findIndex((el) => el.name === item.name);
    if (iItem >= 0) {
      items[iItem].quantity++;
    } else {
      items.push({
        name: item.name,
        price: item.price.amount,
        quantity: 1,
      });
    }
    this.setState({ cartItems: items });
  }

  componentDidMount() {
    const url = "https://interview-challenge-server.herokuapp.com/products";
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ shoes: data.products });
      })
      .catch((error) => console.log(error));
  }

  render() {
    return (
      <div className="Store">
        <div className="font-s-xxl font-w-b">Simply shoes</div>
        <Cart items={this.state.cartItems} />
        <Shoes
          shoeItems={this.state.shoes}
          addItem={(item) => this.addItem(item)}
        />
      </div>
    );
  }
}

export default Store;
