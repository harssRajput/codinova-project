function CartItem(props) {
  const { name, price } = props.product;
  return (
    <tr className="cart-item">
      <td>
        <button>x</button>
      </td>
      <td>
        <span>{name}</span>
      </td>
      <td>
        <span>{price}</span>
      </td>
      <td>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </td>
      <td>
        <span className="total">TOTAL</span>
      </td>
    </tr>
  );
}

export default CartItem;
