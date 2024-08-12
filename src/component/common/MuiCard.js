import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch, useSelector } from "react-redux";
import { ADD_TO_CART,DELETE_FROM_CART } from "../../redux/shoppingReducer";

export default function MediaCard({ product }) {
   const {cart}= useSelector(state=>state);
   const dispatch=useDispatch();
   console.log(cart.some(c=>c.product.id===product.id));
   console.log(product.id)
  return (
    <Card
      sx={{
        maxWidth: 345,
        margin: "2rem",
        marginLeft: "38px",
        textAlign: "center",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <CardMedia
        sx={{ height: 150, width: 200, backgroundSize: "contain" }}
        image={product.image}
        title={product.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {product.title}
        </Typography>
        <Typography>&#8377;{product.price}</Typography>
        <Typography variant="body2" color="text.secondary">
          {product.description}
        </Typography>
      </CardContent>
      <CardActions>
        {cart.some(c=>c.product.id===product.id)? <Button onClick={()=>dispatch(DELETE_FROM_CART({product,qty:1}))} variant="outlined" startIcon={<DeleteIcon />}>
          Delete
        </Button>:<Button variant="contained" onClick={()=>dispatch(ADD_TO_CART({product,qty:1}))}>Add to Cart</Button>}
       
      </CardActions>
    </Card>
  );
}
