import Product from './Product';

function Products(props) {
  const {products} = props;
    return (
      <div className="products">
        {products.map((product) =>{
          return (
            <Product
            product={product}
            />
          );
        })}
      </div>
    );
  }
  
  export default Products;
  