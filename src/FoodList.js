//import { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { Food } from './Food';

export function FoodList({ addToCart }) {
  const [foodData, setFoodData] = useState([]);

  const getFoods = () => {
    fetch(`https://638af1ba7220b45d22850b2c.mockapi.io/foods`, { method: "GET" })
      .then((data) => data.json())
      .then((foods) => setFoodData(foods))
  }

  useEffect(() => getFoods(), []);

  // const deleteFood = (id)=>{
  //   fetch (`https://638af1ba7220b45d22850b2c.mockapi.io/foods`, {method:"DELETE"})
  //   .then((data)=> getFoods())
  // }

  return (
    <div className="food-list">
      {foodData.map((fd, index) => (<Food key={index} food={fd} id={index} addToCart={addToCart} />))}
    </div>
  );
}

