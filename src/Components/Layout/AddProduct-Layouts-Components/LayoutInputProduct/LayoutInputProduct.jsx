import React, {useState} from "react";
import axios from "axios";
import { UInputProduct } from "../../../UI/AddProduct-UI-Components/UInputProduct/UInputProduct";
import { UILogos } from "../../../UI/Main-UI-Components/UILogos/UILogos";


export const LayoutInputProduct = () => {
  const [typeInput, setTypeInput] = useState("");
  const [name, setName] = useState("");
  const [imgProduct, setImage] = useState();
  const [condition, setCondition] = useState("");
  const [description, setDescription] = useState("");
  const [availability, setAvailability] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [idOwner, setIdOwner] = useState("");
  // []
  var formData = new FormData();

  const Handle = async (event) => {
    formData.append("type", typeInput);
    formData.append("name", name);
    formData.append("imgProduct", imgProduct);
    formData.append("condition", condition);
    formData.append("description", description);
    formData.append("availability", availability);
    formData.append("city", city);
    formData.append("date", date);
    formData.append("idOwner", idOwner);

    axios
      .post(
        "https://backend-fullmarket-py.herokuapp.com/createnewproduct",
        formData
      )
      .then()
      .catch((error) => {
        console.log(error);
      });
    event.preventDefault();
  };

  return (
    <>
    <div className="addProductHeader">
        <div className="headerLogotype">
          <UILogos />
        </div>
    </div>
    <div className="spaceAddProduct"></div>
    <div className="containerFormData">
      <form onSubmit={Handle} className="form12">
        <UInputProduct
          classInput="inputAddProduct"
          typeInput="type"
          nameInput="type"
          valueInput={typeInput}
          onChange={(e) => setTypeInput(e.target.value)}
          placeholder="Tipo"/>
        
        <UInputProduct
          classInput="inputAddProduct"
          typeInput="name"
          nameInput="name"
          valueInput={typeInput}
          onChange={(e) => setName(e.target.value)}
          placeholder="Nombre"/>
        
        <UInputProduct
          classInput="inputAddImgProduct"
          typeInput="file"
          nameInput="imgProduct"
          onChange={(e) => setImage(e.target.files[0])}
          placeholder="Photo"/>
        <UInputProduct
          classInput="inputAddProduct"
          typeInput="condition"
          nameInput="condition"
          valueInput={typeInput}
          onChange={(e) => setCondition(e.target.value)}
          placeholder="Condition"/>
      </form>
      </div>
    </>
  );
};
