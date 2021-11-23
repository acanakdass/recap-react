import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import Cars from '../../components/Customer/Cars';
import Brands from '../../components/Customer/Brands';
import Navbar from '../../components/Admin/Navbar/Navbar';
import { Container, Grid } from '@mui/material';
import { Box } from '@mui/system';
import Sidebar from '../../components/Customer/Sidebar';

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
