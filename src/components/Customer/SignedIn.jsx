import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { useNavigate } from 'react-router';
import UserService from '../../services/userService';
function SignedIn({ handleSignOut }) {
   const [anchorElUser, setAnchorElUser] = React.useState(null);

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


   const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget);
   };

   const handleCloseUserMenu = () => {
      setAnchorElUser(null);
   };

   return (
      <Box sx={{ flexGrow: 0 }}>
         <IconButton onClick={handleOpenUserMenu} style={{ padding: 5 }} sx={{ p: 0 }}>
            <Avatar alt={currentUser.firstName} src="/image" style={{ margin: 5 }} />
            <span style={{ fontSize: 18 }}>{currentUser.username} </span>
         </IconButton>
         <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
            keepMounted
            transformOrigin={{
               vertical: 'top',
               horizontal: 'right',
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
         >
            <MenuItem onClick={() => handleSignOut()}>
               <Typography textAlign="center">Logout</Typography>
            </MenuItem>

         </Menu>
      </Box>
   )
}

export default SignedIn
