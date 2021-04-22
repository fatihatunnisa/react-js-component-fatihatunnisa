import "./App.css";
import { useState } from "react";
import ProductItem from "./ProductItem";
import React from "react";

function App() {
  const [listProd, setListProd] = useState([
    {
      Product: "Bingkai",
    },
    {
      Product: "Vas",
    },
    {
      Product: "Buku",
    },
  ]);

  return (
    <div className="App">
      <p>List Product</p>
      {listProd.map((item) => {
        return <li>{item.Product}</li>;
      })}
      <ProductItem daftarProduct={listProd} />
    </div>
  );
}

export default App;