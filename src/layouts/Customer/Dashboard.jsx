import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import Cars from '../../components/Customer/Cars';
import Brands from '../../components/Customer/Brands';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Sidebar from '../../components/Customer/Sidebar';
import Navbar from '../../components/Customer/Navbar';

function Dashboard() {
   return (
      <div>
         <Navbar />
         <Container>

            <Box sx={{ flexGrow: 1 }}>
               <Grid container spacing={2}>

                  <Grid item xs={4}>
                     <div>
                        <Sidebar />
                     </div>
                  </Grid>
                  <Grid item xs={8}>
                     <div>
                        <Outlet />
                     </div>
                  </Grid>
               </Grid>
            </Box>
         </Container>
      </div>
   )
}

export default Dashboard
