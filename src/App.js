import { AppBar, Badge, Button, Toolbar } from '@mui/material';
import { useEffect, useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import './App.css';
import { FoodList } from './FoodList';
import { AddFood } from './AddFood';
import { FoodDetail } from './FoodDetail';
import { Cart } from './Cart';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

// const INITIAL_FOOD_LIST = [{
//   "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qmf1f49v268jnxfhrpe2",
//   "name": "Chikken Biryani",
//   "price": "299",
//   "rating": "3.8",
//   "category": "briyani",
//   "description": "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, and fish), or in some cases without any meat, and sometimes, in addition, eggs and potatoes.",
// },
// {
//   "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/vsont2fdjveibxuqtdff",
//   "name": "Mutton Biryani",
//   "price": "349",
//   "rating": "4.2",
//   "category": "briyani",
//   "description": "Biryani is a mixed rice dish originating among the Muslims of the Indian subcontinent. It is made with Indian spices, rice, and usually some type of meat (chicken, beef, goat, lamb, prawn, and fish), or in some cases without any meat, and sometimes, in addition, eggs and potatoes.",
// },
// {
//   "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/vrk9ydhdcn6wzga68r9r",
//   "name": "Plain Dosa",
//   "price": "49",
//   "rating": "4.5",
//   "category": "dosa",
//   "description": "A dosa, also called dosai, dosey, dwashi or dosha is a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are popular in South Asia as well as around the world. Dosas are served hot, often with chutney and sambar",
// },
// {
//   "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/fo5heiuhuqopijvwaie6",
//   "name": "Masala Dosa",
//   "price": "99",
//   "rating": "4.3",
//   "category": "dosa",
//   "description": "A dosa, also called dosai, dosey, dwashi or dosha is a thin pancake in South Indian cuisine made from a fermented batter of ground black lentils and rice. Dosas are popular in South Asia as well as around the world. Dosas are served hot, often with chutney and sambar",
// },
// {
//   "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/lecma5hbh5hmsaq3bkih",
//   "name": "Veg Meal",
//   "price": "159",
//   "rating": "4",
//   "category": "meals",
//   "description": "Vegetables: leafy greens, asparagus, broccoli, tomatoes, carrots. Grains: quinoa, barley, buckwheat, rice, oats. Legumes: lentils, beans, peas, chickpeas. Nuts: almonds, walnuts, cashews, chestnuts",
// },
// {
//   "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/j2cvxbadfsvjds8wgbcv",
//   "name": "Non Veg Meal",
//   "price": "259",
//   "rating": "4.1",
//   "category": "meals",
//   "description": "It defines non-vegetarian food as any food which contains whole or part of any animal including birds, marine animals, eggs, or products of any animal origin as an ingredient, excluding milk or milk products",
// },
// {
//   "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/ovpd9vcglvtwxb3jaw8p",
//   "name": "Chocolate Truffle Cake",
//   "price": "349",
//   "rating": "3.9",
//   "category": "cake",
//   "description": "Free fire candle or birthday cone with 1/2kg. free party popper or snow spray or music candle with 1kg",
// },
// {
//   "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/dname8r7myl9h9pwcr11",
//   "name": "Black Forest Cake",
//   "price": "299",
//   "rating": "4.4",
//   "category": "cake",
//   "description": "Free fire candle or birthday cone with 1/2kg. free party popper or snow spray or music candle with 1kg",
// },
// {
//   "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/eiarzf9rxnlebk1784al",
//   "name": "Paan Ice Cream",
//   "price": "125",
//   "rating": "3.2",
//   "category": "ice cream",
//   "description": "The king of fruits adds a delightful flavour to your scoop. The perfect taste of rich and pure ratnagiri alphonso mango in every bite",
// },
// {
//   "image": "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/aa0v5rhdsghrrb2udmja",
//   "name": "Magnum Chocolate Truffle Ice Cream",
//   "price": "99",
//   "rating": "3.9",
//   "category": "ice cream",
//   "description": "Rich Chocolate Icecream With Truffle Sauce Wrapped In Thick Belgian Chocolate.",
// }
// ];

function App() {

  const [foodData, setFoodData] = useState([]);

  // console.log(foodData);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://638af1ba7220b45d22850b2c.mockapi.io/foods`)
      .then((data) => data.json())
      .then((foods) => setFoodData(foods))
  }, []);

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  // const [items, setItems] = useState([]);

  const removeItemFromCart = (index) => {
    const newItems = [...cartItems];
    newItems.splice(index, 1);
    setCartItems(newItems);
  };

  return (
    <div className="App">
      <AppBar position='static' color='error'>
        <Toolbar>
          <Button color='inherit' onClick={() => navigate(`/`)}>Home</Button>
          <Button color='inherit' onClick={() => navigate(`/foods`)}>Food List</Button>
          <Button color='inherit' onClick={() => navigate(`/addfood`)}>Add Food</Button>
          <Button color='inherit' sx={{ marginLeft: 'auto' }} onClick={() => navigate(`/cart`)}><Badge color="primary" badgeContent={cartItems.length}>
            <ShoppingCartIcon />
          </Badge></Button>
        </Toolbar>
      </AppBar>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/foods' element={<FoodList addToCart={addToCart} />} />
        <Route path='/foods/:id' element={<FoodDetail foodData={foodData} />} />
        <Route path='/addfood' element={<AddFood />} />
        <Route path='/cart' element={<Cart cartItems={cartItems} removeItemFromCart={removeItemFromCart} />} />
      </Routes>
    </div>
  );
}


function Home() {

  const navigate = useNavigate();

  return (
    <div className="food-home">
      <h1>Welcome To Food App</h1>
      <Button onClick={() => navigate('/foods')} variant='contained' color='error'>Enjoy Your Food</Button>
    </div>
  )
}
export default App;
