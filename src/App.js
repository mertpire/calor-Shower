import React, { useState, useEffect } from "react";
import Foods from "./Foods";
import AddFood from "./AddFood";

import "./assets/app.css";
import "./assets/index.css";

const ListApp = () => {
  const API_ID = "ad502649";
  const API_KEY = "41bb689d2698f4ba8311a04c791c18f4";

  const [food, setFood] = useState([]);

  const [input, setInput] = useState({});

  const [search, setSearch] = useState();

  const [addFood, setaddFood] = useState([input]);

  useEffect(() => {
    getData();
    console.log(search);
    getFood();
  }, []);

  const getData = async e => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${search}&app_id=${API_ID}&app_key=${API_KEY}`
    );
    const data = await response.json();
    setFood(data.hits);
    
  };
  
  const onChangeHandler = (e) => {
    let value = e.target.value;
    setInput({ ...input, [e.target.name]: value });
  };
  const onChangeSearchHandler = (e) => {
    let value = e.target.value;
    setSearch(value);
    console.log(search);
  };
  
  
  const addNewFoodToStorage = (e) => {
    let newFoods = getFoodsFromStorage();

    newFoods.push(input);

    localStorage.setItem("newFoods", JSON.stringify(newFoods));
    getFood();
    

    e.preventDefault();
  };

  const getFoodsFromStorage = () => {
    let newFoods;

    if (localStorage.getItem("newFoods") === null) {
      newFoods = [];
    } else {
      newFoods = JSON.parse(localStorage.getItem("newFoods"));
    }

    return newFoods;
  };
  const getFood = () => {
    let newFoods = getFoodsFromStorage();
    setaddFood(newFoods);
  };
  
  return (
    <div className="list-app">
      <form className="form">
        <div className="first-form">
          <h1>
            Write the food <br /> you want
          </h1>
          <input
            
            onChange={onChangeSearchHandler}
            name="search"
            id="search"
            type="text"
            placeholder="Search for recipe..."
          ></input>
          <button onClick={(e) => getData(e.preventDefault())} id="btn-2"></button>
        </div>
        <div className="second-form">
          <h2>
            or <br />
            Add your own food
          </h2>

          <input
            onChange={onChangeHandler}
            name="title"
            id="food"
            type="text"
            placeholder="Name"
          />
          <input
            onChange={onChangeHandler}
            name="calories"
            id="calories"
            type="text"
            placeholder="Calories"
          />
          <input
            onChange={onChangeHandler}
            name="image"
            type="text"
            id="img"
            placeholder="https://image.com"
          />
          <button id="btn" onClick={addNewFoodToStorage}></button>
        </div>
      </form>
      <div className="foods">
        {food.map((food) => (
          <Foods
            key={food.recipe.label}
            title={food.recipe.label}
            calories={food.recipe.calories}
            img={food.recipe.image}
          />
        ))}
      </div>
      <h1 id="your-food">Your Foods</h1>
      <div className="addedFoods">
        {addFood.map((addFood) => (
          <AddFood
            key={addFood.title}
            title={addFood.title}
            calories={addFood.calories}
            img={addFood.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ListApp;

