import img from "../dataset/images/computer.jpg"

function Product(props) {
  const { name, image } = props.product;
  console.log("image address is ", `../dataset/images/${image}`);
  return (
    <div className="product">
      <img src={`../dataset/images/${image}`} alt="product image"/>
    </div>
  );
}
// `../dataset/images/${product.image}`
export default Product;
