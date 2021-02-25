import { Component } from "react";
import Shoe from "./Shoe.js";
import "./Shoes.css";

class Shoes extends Component {
  constructor(props) {
    super(props);

    this.renderShoeItems = this.renderShoeItems.bind(this);
  }

  renderShoeItems() {
    return this.props.shoeItems.map((item) => (
      <Shoe
        key={item.id}
        item={item}
        addItem={() => this.props.addItem(item)}
      />
    ));
  }

  render() {
    return <ul className="Shoes">{this.renderShoeItems()}</ul>;
  }
}

export default Shoes;
