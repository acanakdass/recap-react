import React, { useEffect, useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Divider } from '@mui/material';
import BrandService from '../../services/brandService';
import { useNavigate } from 'react-router';
function Brands() {

   const [brands, setBrands] = useState([])
   const navigate = useNavigate();

   useEffect(() => {
      let brandService = new BrandService();
      brandService.getAll().then(res => {
         console.log(res.data.data)
         setBrands(res.data.data)
      })
   }, [])

   return (
      <div>
         <div style={{ border: "solid lightgray", borderWidth: "1px" }}>
            <List
               sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
               component="nav"
               aria-labelledby="nested-list-subheader"
               subheader={
                  <ListSubheader component="div" id="nested-list-subheader">
                     Brands
                  </ListSubheader>
               }
            >
               <ListItemButton onClick={() => navigate('/')}>
                  <ListItemText primary="All" />
               </ListItemButton>
               <Divider />

               {brands.map((brand) => (
                  <div>
                     <ListItemButton onClick={() => navigate('/filter/brand/' + brand.id)}>
                        <ListItemText primary={brand.name} />
                     </ListItemButton>
                     <Divider />
                  </div>
               ))}
            </List>
         </div>
      </div>
   )
}

export default Brands
