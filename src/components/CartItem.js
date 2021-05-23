import React from "react";


function CartItem(props) {
  const { name, price, qty } = props.product;
  const {
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteItem,
    product,
  } = props;
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

export default CartItem;
