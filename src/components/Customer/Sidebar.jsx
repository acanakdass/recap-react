import React, { useEffect, useState } from 'react'
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Divider } from '@mui/material';
import BrandService from '../../services/brandService';
import { useNavigate } from 'react-router';
import Brands from './Brands';
import Colors from './Sidebar/Colors';

function Sidebar() {
   useEffect(() => {
      // let brandService = new BrandService();
      // brandService.getAll().then(res => {
      //    console.log(res.data.data)
      //    setBrands(res.data.data)
      // })
   }, [])
   return (
      <div style={{ border: "0.5 px solid lightgray", marginTop: "1em", padding: '4em' }}>
         <Brands />
         <Colors />
      </div>
   )
}

export default Sidebar
