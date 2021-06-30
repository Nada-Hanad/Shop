import React, { useState } from "react";
import ButtonAppBar from "./Components/AppBar";
import NestedGrid from "./Components/GridList";
import "./App.css";
import AlertDialog from "./Components/addDialog";
var myProducts = [
  {
    title: "First",
    content: " Any Shit",
    quantity: 1,
  },
  {
    title: "Second",
    content: " Any Shit",
    quantity: 1,
  },
  {
    title: "Third",
    content: " Any Shit",
    quantity: 1,
  },
  {
    title: "Fourth",
    content: " Any Shit",
    quantity: 1,
  },
  {
    title: "Fifth",
    content: " Any Shit",
    quantity: 1,
  },
  {
    title: "Sixth",
    content: " Any Shit",
    quantity: 1,
  },
  {
    title: "Seventh",
    content: " Any Shit",
    quantity: 1,
  },
];
var myCart = [];
function App(props) {
  const [myProducts, setMyProducts] = useState([]);
  const [myCart, setMycart] = useState([]);
  const addToCart = (produit) => {
    if (myCart.find((e) => e.title == produit.title) != null) {
      setMycart([
        [myCart.findIndex((e) => e.title == produit.title)].quantity++,
      ]);
    } else {
      setMycart([...myCart, produit]);
    }
  };
  const deleteFromCart = (prod) => {
    setMycart([...myCart.filter((item) => item.title !== prod.title)]);
  };
  const addNewProduct = (produit) => {
    setMyProducts([...myProducts, produit]);
  };
  return (
    <div>
      <ButtonAppBar
        myCart={this.state.myCart}
        deleteFromCart={this.deleteFromCart}
      />
      <div className="myGrid">
        <NestedGrid
          addToCart={this.addToCart}
          myProducts={this.state.myProducts}
        />
      </div>
      <AlertDialog></AlertDialog>

      <button
        onClick={(e) => {
          this.addNewProduct(this.state.myProducts[0]);
        }}
      ></button>
    </div>
  );
}
export default App;
