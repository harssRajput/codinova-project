import React from "react";


class CartItem extends React.Component {

  constructor(){
    super();

    this.state={
      total: 0,
    }
  }
  
  setTotal = (product)=> {
    this.setState({ total: this.props.product.price,})
  }

  render() {
    // console.log("price of product ", typeof(this.props.product.price));
    const { name, price, qty } = this.props.product;
    const {
      onIncreaseQuantity,
      onDecreaseQuantity,
      onDeleteItem,
      product,
    } = this.props;
    // this.setTotal(product);
    return (
      <tr className="cart-item">
        <td>
          <button
            onClick={() => {
              onDeleteItem(product);
            }}
          >
            x
          </button>
        </td>
        <td>
          <span>{name}</span>
        </td>
        <td>
          <span>{price}</span>
        </td>
        <td>
          <div>
            <button
              onClick={() => {
                onDecreaseQuantity(product);
              }}
            >
              -
            </button>
            <span>{qty}</span>
            <button
              onClick={() => {
                onIncreaseQuantity(product);
              }}
            >
              +
            </button>
          </div>
        </td>
        <td>
          <span className="total">{price*qty}</span>
        </td>
      </tr>
    );
  }
}

export default CartItem;
