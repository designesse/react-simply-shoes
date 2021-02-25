import { Component } from "react";
import "./Shoe.css";

class Shoe extends Component {
  render() {
    return (
      <li className="Shoe">
        <img
          src={this.props.item.image.url}
          alt={this.props.item.image.fileName}
        />
        <div className="info">
          <div className="float-l">
            <div className="font-w-b">{this.props.item.name}</div>
            <div className="color-light price">
              {this.props.item.price.amount / 100}
            </div>
          </div>
          <button
            className="float-r"
            onClick={() => this.props.addItem(this.props.item)}
          >
            Add to cart
          </button>
        </div>
      </li>
    );
  }
}

export default Shoe;
