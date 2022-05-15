import React from "react";
import { NavLink } from "react-router-dom";
import { UIButtons } from "../../../UI/Main-UI-Components/UIButtons/UIButtons";

export const LayoutCrud = () => {
  return (
    <div className="container-buttons-crud">
      <NavLink to="AddNewProduct">
        <UIButtons
          classButtons="btn-primaryHeader"
          nameButtons="Agregar Producto"
        />
      </NavLink>
      <NavLink to="MyProducts">
        <UIButtons
          classButtons="btn-primaryHeader"
          nameButtons="Ver Mis productos"
        />
      </NavLink>
    </div>
  );
};
