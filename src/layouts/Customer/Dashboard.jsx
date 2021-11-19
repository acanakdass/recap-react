import React from 'react'
import { Outlet, Route, Routes } from 'react-router'
import Cars from '../../components/Customer/Cars';
import Brands from '../../components/Customer/Brands';
import Navbar from '../../components/Admin/Navbar/Navbar';
import { Container } from '@mui/material';

function Dashboard() {
   return (
      <div>
         <Navbar />
         <Container maxWidth="xl">
            <h1>Customer Dashboard</h1>
            <hr />
            <div>
               <Outlet />
            </div>
         </Container>
      </div>
   )
}

export default Dashboard
