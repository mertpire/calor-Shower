import React from "react";

const AddFood = ({ title, calories, img }) => {
  const style = {
    margin: "5%",
    padding: "5%",
    borderRadius: "10px",
    background: "#fbfbf7",
    boxShadow: "-0.1em 0 .4em rgb(0, 0, 0,0.5)",
  };
  const image = {
    width: "300px",
    height: "300px",
  };
  return (
    <div style={style}>
      <h2>{title}</h2>
      <p>{calories}</p>
      <img style={image} src={img} alt="Recipe imgs" />
    </div>
  );
};

export default AddFood;
