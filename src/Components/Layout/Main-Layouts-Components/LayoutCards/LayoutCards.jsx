import React, { useEffect, useState } from "react";
import { UICards } from "../../../UI/Main-UI-Components/UICards/UICards.jsx";
import '../../../../Styles/Main-Styles/MainStyle.css';

export const LayoutCards = () => {
  const URL = "https://backend-fullmarket-py.herokuapp.com/getallproducts";
  const [products, setProducts] = useState([]);
  
  const showProducts = async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  };
  useEffect(() => {
    showProducts();
  }, []);
  // console.log(products);

  return (
    <main className="main-products">
      {products.map((element) => (
        <UICards
          key = {element.name + 1}
          typeProduct = {element.type}
          imgProduct = {element.imgProductURL}
          nameProduct = {element.name}
          conditionProduct = {element.condition}
          availabilityProduct = {element.availability}
          dateProduct = {element.date}
          descriptionProduct = {element.description}
          cityProduct = {element.city}
        />
      ))}
    </main>
  );
};
