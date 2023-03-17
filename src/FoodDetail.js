import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export function FoodDetail() {

  const { id } = useParams();
  //const food = foodData[id];
  const [foods, setFoodData] = useState([]);

  useEffect(() => {
    fetch(`https://638af1ba7220b45d22850b2c.mockapi.io/foods/${id}`)
      .then((data) => data.json())
      .then((foods) => setFoodData(foods));
  }, []);

console.log(foods.name);
  const styles = {
    color: foods.rating >= 8.5 ? 'green' : 'red',
  };

  // const navigate = useNavigate();
  // <Button variant='contained' className='back-btn' onClick={() => navigate(-1)}><KeyboardBackspaceIcon />  Back</Button>
  return (
    <div className="food-detail">
      <div className="food-img">
        <img src={foods.image} alt="" />
      </div>
      <div className="food-info">
        <h1>content</h1>
      </div>
    </div>
  );
}
