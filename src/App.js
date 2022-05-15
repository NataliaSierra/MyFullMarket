import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { AddNewProduct } from "./Components/Pages/Add-New-Product/AddNewProduct";
import { MainPage } from "./Components/Pages/Main-Page/MainPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/AddNewProduct" element={<AddNewProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
