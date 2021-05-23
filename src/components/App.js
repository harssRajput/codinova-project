import React from "react";
import dataset from "../dataset/pos.products.json";

import Cart from "./Cart";
import Products from "./Products";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: dataset.map((data) => {
        let newData = data;
        newData["qty"] = 1;
        return newData;
      }),
    };
  }

  render() {
    return (
      <div className="main">
        <Cart />
        <Products products={this.state.products} />
      </div>
    );
  }
}

export default App;
