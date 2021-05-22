function CartItem() {
  return (
    <div className="cart-item">
        <button>x</button>
        <span>PRODUCT</span>
        <span>PRICE</span>
        <div>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
        <span className="total">TOTAL</span>
    </div>
  );
}

export default CartItem;
