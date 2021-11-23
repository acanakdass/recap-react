import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';

import Badge from '@mui/material/Badge';

import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import AuthService from '../../../services/authService';
import UserService from '../../../services/userService';
import { useNavigate } from 'react-router';
function SignedIn({ handleMobileMenuOpen, handleProfileMenuOpen, mobileMenuId, menuId }) {

   let navigate = useNavigate();
   const [currentUser, setCurrentUser] = useState({})
   useEffect(() => {
      let userService = new UserService();
      userService.getCurrentUser(localStorage.getItem('token')).then(res => {
         console.log(res.data.data);
         setCurrentUser(res.data.data);
         console.log(currentUser)
      }).catch(err => {
         console.log("err")
         console.log(err)
         navigate('auth')
      })
   }, [])
   return (
      <div>
         <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
               <Badge badgeContent={4} color="error">
                  <MailIcon />
               </Badge>
            </IconButton>
            <IconButton
               size="large"
               aria-label="show 17 new notifications"
               color="inherit"
            >
               <Badge badgeContent={17} color="error">
                  <NotificationsIcon />
               </Badge>
            </IconButton>

            <IconButton
               size="large"
               edge="end"
               aria-label="account of current user"
               aria-controls={menuId}
               aria-haspopup="true"
               onClick={handleProfileMenuOpen}
               color="inherit"
            >
               <AccountCircle />
               <span style={{ fontSize: 20 }}>{currentUser.username} </span>
            </IconButton>
         </Box>
         <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton
               size="large"
               aria-label="show more"
               aria-controls={mobileMenuId}
               aria-haspopup="true"
               onClick={handleMobileMenuOpen}
               color="inherit"
            >
               <MoreIcon />
            </IconButton>
         </Box>
      </div>
   )
}

export default SignedIn
