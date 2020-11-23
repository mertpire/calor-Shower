import React from "react";
import "./assets/foods.css";
const Foods = ({ title, calories, img }) => {
  const style = {
    margin: "5%",
    padding: "5%",
    borderRadius: "10px",
    background: "#fbfbf7",
    boxShadow: "-0.1em 0 .4em rgb(0, 0, 0,0.5)",
  };
  return (
    <div style={style}>
      <h2>{title}</h2>
      <p>{calories}</p>
      <img src={img} alt="Recipe imgs" />
    </div>
  );
};

export default Foods;
