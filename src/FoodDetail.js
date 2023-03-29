import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

export function FoodDetail({ foodData }) {

  const { id } = useParams();

  const food = foodData[id];
  console.log(food);


  const styles = {
    color: food.rating >= 8.5 ? 'green' : 'red',
  };

  const navigate = useNavigate();
  return (
    <div className="detail">
      <div className="food-detail">
        <div className="detail-img">
          <img src={food.image} alt={food.name} />
        </div>
        <div className="detail-content">
          <h3 className='name'>{food.name} <span className="food-rating" style={styles}>⭐️{food.rating}</span></h3>
          <p>{food.description}</p>
          <Button variant='contained' onClick={() => navigate(-1)}><KeyboardBackspaceIcon />  Back</Button>
        </div>
      </div>
    </div>
  );
}
