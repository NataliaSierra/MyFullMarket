import React from "react";
import ImgLogotype from "../../../../Image/Logotype-Folder-Image/Logotype.png";
import Name from "../../../../Image/Logotype-Folder-Image/logotypeFMarket.png"
export const UILogos = () => {
  return (
    <>
      <div className="containerLogotype">
        <img src={ImgLogotype} className="imgLogotype"></img>
        <img src={Name} className="imgNameLogotype"></img>
      </div>
    </>
  );
};
