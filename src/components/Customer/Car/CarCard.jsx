import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions, Divider } from '@mui/material';
function CarCard(props) {

   let carImageUrl = "https://localhost:34070/" + props.car.carImagePaths[0];
   return (
      <div>
         <Card sx={{ maxWidth: 250 }}>
            <CardActionArea>
               <CardMedia
                  component="img"
                  height="150"
                  image={`https://localhost:34070/${props.car.carImagePaths[0]}`}
                  alt="green iguana"
               />
               <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                     {props.car.brandName}
                     <Divider />
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                     {props.car.carName} <br />
                     {/* {props.car.description} <br /> */}
                     {props.car.modelYear}
                     <h1 style={{ margin: 0 }}>
                        {props.car.dailyPrice}$
                     </h1>

                  </Typography>
               </CardContent>
            </CardActionArea>
            <CardActions>
               <Button variant='outlined' fullWidth size="small" color="primary">
                  Rent
               </Button>
            </CardActions>
         </Card>
      </div >
   )
}

export default CarCard
