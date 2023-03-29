import { Button, Card, CardActions, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';

export function CartCard({ cartItems, removeItemFromCart }) {

  const [quantity, setQuantity] = useState(1);

  return (
    <div className='cartitem'>
      {cartItems.map((cartItems, index) => (
        <Card className="cart-card" key={index}>
          <img src={cartItems.image} alt="product image" className='cart-image' />
          <CardContent>
            <div className="cart-spec">
              <h3>{cartItems.name}</h3>
              <p>Quantity: <select className='form-control' value={quantity} onChange={(e) => { setQuantity(e.target.value); }}>
                {[...Array(10).keys()].map((_x, i) => {
                  return <option value={i + 1}>{i + 1}</option>;
                })}
              </select> </p>

            </div>
          </CardContent>
          <h3> Price: ₹{cartItems.price * quantity}</h3>
          <CardActions className='card-action'>
            <Button color='error' className='cart-del-icon' onClick={() => removeItemFromCart(index)}><DeleteIcon /></Button>
          </CardActions>
        </Card>
      ))}
    </div>
  );
}
