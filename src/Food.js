import { Button, Card, CardActions, CardContent, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { useNavigate } from 'react-router-dom';

export function Food({ food, id, addToCart, }) {
  const styles = {
    color: food.rating >= 4 ? 'green' : 'red',
  };

  const navigate = useNavigate();

  const disable = false;
  return (
    <Card className="food-container">
      <img src={food.image} alt={food.name} className="food-image" />
      <CardContent>
        <div className="food-specs">
          <h3 className='food-name'>{food.name} <IconButton onClick={() => navigate(`/foods/${id}`)} aria-label='toggle' color='primary'>
            <InfoIcon />
          </IconButton></h3>
          <p className="food-rating" style={styles}>⭐️{food.rating}</p>
        </div>
      </CardContent>

      <CardActions className="food-but">
        <h3 className="food-price">Price: ₹ {food.price}</h3>
        <Button
          className="food-addcart"
          variant='contained'
          color="error"
          disabled={disable}
          onClick={() => addToCart(food)}
        >{!disable ? "Add To Cart" : "Added To Cart"}</Button>
      </CardActions>
    </Card>
  );
}
