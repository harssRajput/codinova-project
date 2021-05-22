function CartItem() {
  return (
    <div className="cart-item">
      {/* <div> */}
        <button>x</button>
      {/* </div> */}
      {/* <div className="item-info"> */}
        <span className="product">PRODUCT</span>
        <span className="price">PRICE</span>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <span className="total">TOTAL</span>
      {/* </div> */}
    </div>
  );
}

export default CartItem;
