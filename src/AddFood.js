import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export function AddFood({ foodData, setFoodData }) {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');
  const [rating, setRating] = useState('');
  const [description, setDescription] = useState('');

  const addFood = () => {
    const newFood = {
      name: name,
      price: price,
      category: category,
      image: image,
      rating: rating,
      description: description,
    };

    setFoodData([...foodData, newFood]);
  };

  return (
    <div className="add-food">
      <TextField id="outlined-basic" label="Food Name" variant="outlined" type="text" onChange={(event) => setName(event.target.value)} />
      <TextField id="outlined-basic" label="Food Price" variant="outlined" type="text" onChange={(event) => setPrice(event.target.value)} />
      <TextField id="outlined-basic" label="Food Category" variant="outlined" type="text" onChange={(event) => setCategory(event.target.value)} />
      <TextField id="outlined-basic" label="Food Image URL" variant="outlined" type="text" onChange={(event) => setImage(event.target.value)} />
      <TextField id="outlined-basic" label="Food Rating" variant="outlined" type="text" onChange={(event) => setRating(event.target.value)} />
      <TextField id="outlined-basic" label="Food Description" variant="outlined" type="text" onChange={(event) => setDescription(event.target.value)} />
      <Button variant="contained" onClick={addFood} color='error'>Add Food</Button>
    </div>
  );
}
