import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AddNewProduct } from "./Components/Pages/Add-New-Product/AddNewProduct";
import { EditMyProduct } from "./Components/Pages/Edit-My-Product/EditMyProduct";
import { MainPage } from "./Components/Pages/Main-Page/MainPage.jsx";
import { SeeMyProducts } from "./Components/Pages/See-My-Products/SeeMyProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/AddNewProduct" element={<AddNewProduct />} />
        <Route path="/MyProducts" element={<SeeMyProducts />} />
        <Route path="/EditMyProduct" element={<EditMyProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
