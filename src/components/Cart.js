import CartItem from "./CartItem";
import Footer from "./Footer";

function Cart() {
  return (
    <div className="cart">
      <div className="cart-header">
        <span>PRODUCTS</span>
        <span>PRICE</span>
        <span>QUANTITY</span>
        <span>TOTAL</span>
      </div>
      <div className="items">
        <CartItem />
      </div>
      <Footer />
    </div>
  );
}

export default Cart;
