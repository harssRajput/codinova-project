import CartItem from "./CartItem";
import Footer from "./Footer";

function Cart() {
  return (
    <div className="cart">
      <div className="cart-header">
        <span className="products">PRODUCTS</span>
        <span className="price">PRICE</span>
        <span className="quantity">QUANTITY</span>
        <span className="total">TOTAL</span>
      </div>
      <CartItem />
      <Footer />
    </div>
  );
}

export default Cart;
