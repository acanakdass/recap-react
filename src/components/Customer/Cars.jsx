
import { Container, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react'
import CarService from '../../services/carService';
import CarCard from './Car/CarCard';
import { Box } from '@mui/system';
import { useParams } from 'react-router';

function Cars() {

   let { brandId, colorId } = useParams();
   console.log(brandId)
   const [cars, setCars] = useState([]);
   useEffect(() => {
      let carService = new CarService();
      if (brandId) {
         carService.getByBrandId(brandId).then(res => {
            console.log(res.data)
            setCars(res.data.data)
         })
      } else if (colorId) {
         carService.getByColorId(colorId).then(res => {
            console.log(res.data);
            setCars(res.data.data);
         })
      } else {
         carService.getAll().then(res => {
            console.log(res.data);
            setCars(res.data.data);
         })
      }
   }, [brandId, colorId])
   return (
      <div>
         <div style={{ marginTop: "5em" }}>

            <Box sx={{ flexGrow: 1 }}>
               <Grid spacing={1} container justifyContent="left">

                  {cars.map((car) => (
                     <>
                        <Grid xs={12} item sm={12} md={6} lg={4}>
                           <CarCard car={car} />
                        </Grid>
                     </>
                  ))}
               </Grid>
            </Box>
         </div>
      </div>
   )
}

export default Cars
