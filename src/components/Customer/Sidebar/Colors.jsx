import React, { useEffect, useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import { Divider } from '@mui/material';
import { useNavigate } from 'react-router';
import ColorService from '../../../services/colorService';
function Colors() {
   const [colors, setColors] = useState([])
   const navigate = useNavigate();

   useEffect(() => {
      let colorService = new ColorService();
      colorService.getAll().then(res => {
         console.log(res.data.data)
         setColors(res.data.data)
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
                     colors
                  </ListSubheader>
               }
            >
               <ListItemButton onClick={() => navigate('/')}>
                  <ListItemText primary="All" />
               </ListItemButton>
               <Divider />

               {colors.map((color) => (
                  <div>
                     <ListItemButton onClick={() => navigate('/filter/color/' + color.id)}>
                        <ListItemText primary={color.name} />
                     </ListItemButton>
                     <Divider />
                  </div>
               ))}
            </List>
         </div>
      </div>
   )
}

export default Colors
