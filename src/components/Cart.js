import React from "react";
import dataset from "../dataset/pos.products.json";

import CartItem from "./CartItem";
import Footer from "./Footer";

class Cart extends React.Component {
  constructor() {
    super();
    // console.log("inside constructor");
    this.state = {
      products: dataset.map((data) => {
        return data;
      }),
    };
    // {
    //   name: "comuter",
    //   price: 130,
    //   category: "computers",
    //   description: ""
    // },
    // {
    //   "name": "sweater",
    //   "price": "1",
    //   "category": "Clothing",
    //   "description": "fashion, clothes , sweater, wool, cardigan,…"
    // },
    // {
    //   "name": "tie",
    //   "price": "46",
    //   "category": "Clothing",
    //   "description": "fashion, tie, clothes, accessory , accessoire,…"
    // }
    // }
  }

  render() {
    // console.log("products ", typeof(this.state));
    const { products } = this.state;
    return (
      <div className="cart">
        <div className="cart-header">
          <table>
            <thead></thead>
            <tbody>
              <tr>
                {/* <td>
                  <span>delete</span>
                </td> */}
                <td>
                  <span>PRODUCTS</span>
                </td>
                <td>
                  <span>PRICE</span>
                </td>
                <td>
                  <span>QUANTITY</span>
                </td>
                <td>
                  <span>TOTAL</span>
                </td>
              </tr>
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
        <div className="items">
          <table>
            <thead></thead>
            <tbody>
              {products.map((product, index) => {
                return (
                  <CartItem
                    product={product}
                    key={index}
                    // onIncreaseQuantity={onIncreaseQuantity}
                    // onDecreaseQuantity={onDecreaseQuantity}
                    // onDeleteItem={onDeleteItem}
                  />
                );
              })}
            </tbody>
            <tfoot></tfoot>
          </table>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Cart;
