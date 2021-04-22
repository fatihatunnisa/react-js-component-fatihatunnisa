import "./App.css";

function ProductItem({ daftarProduct }) {
  return (
    <div>
      <p>Ini Component Product Item</p>
      {daftarProduct.map((item) => {
        return <li>{item.Product}</li>;
      })}
    </div>
  );
}

export default ProductItem;