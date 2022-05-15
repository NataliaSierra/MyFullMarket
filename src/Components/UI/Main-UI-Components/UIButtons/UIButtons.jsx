import React from "react";
import '../../../../Styles/Main-Styles/MainStyle.css'

export const UIButtons = ({ nameButtons, classButtons, onClick }) => {
  return (
    <>
      <div className="headerInitial">
        <button onClick={onClick} className={classButtons}>
          {nameButtons}
        </button>
      </div>
      <div className="space"></div>
    </>
  );
};
