import { Component } from "react";

class Cart extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowContent: true };
  }
  render() {
    let totalQuan = 0;
    let totalSum = 0;
    let itemSums = this.props.items.map((item) => {
      let sum = item.price * item.quantity;
      item.sum = sum;
      totalQuan += item.quantity;
      totalSum += sum;
      return item;
    });
    return (
      <div className="Cart float-r">
        <div
          class="clickable text-align-r"
          onClick={() =>
            this.setState({ isShowContent: !this.state.isShowContent })
          }
        >
          Cart({totalQuan})
        </div>
        <div
          className={[
            this.state.isShowContent ? "display-visible" : "display-none",
            " background-box position-absolute",
          ].join(" ")}
        >
          {itemSums.map((item) => (
            <div>
              {item.name} - {item.quantity}*
              <span className="price">{item.price / 100}</span> ={" "}
              <span className="price">{item.sum / 100}</span>
            </div>
          ))}
          <div className="font-w-b">
            Total = <span className="price">{totalSum / 100}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Cart;
