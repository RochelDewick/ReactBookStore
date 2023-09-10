import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";
import { addToCart } from '../features/booksSlice';
import { useDispatch } from 'react-redux';


export default function MediaCard(props) {

  const dispatch = useDispatch();


  let navigate = useNavigate();

  const moreAboutBook = () => {
    sessionStorage.setItem("bookId", props.id);
    navigate('/BookDetail');

  }
  return (

    <Card sx={{ maxWidth: 345, margin: '5px' }}>
      <CardMedia
        sx={{ height: 140 }}
        image={require(`../img/${props.image}`)}
        title={props.image}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" sx={{ height: 50, width: 400 }}>
          {props.title}<br></br> ${props.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={() => dispatch(addToCart(props.book))}>🛒Add to Cart</Button>
        <Button onClick={moreAboutBook} size="small">📖More About Book</Button>
      </CardActions>
    </Card>
  );
}