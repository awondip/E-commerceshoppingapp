
import React from "react";
import image from "./image.svg";
import "./style.css";
import vector2 from "./vector-2.svg";
import vector from "./vector.svg";

export const Frame = () => {
  return (
    <div className="frame">
      <img className="vector" alt="Vector" src={vector} />
      <div className="text-wrapper">HOME</div>
      <div className="div">SHOP</div>
      <img className="img" alt="Vector" src={image} />
      <div className="text-wrapper-2">PAGES</div>
      <div className="text-wrapper-3">ABOUT</div>
      <div className="text-wrapper-4">CONTACT</div>
      <img className="vector-2" alt="Vector" src={vector2} />
    </div>
  );
};
