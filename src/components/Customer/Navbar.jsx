import * as React from 'react';
import AppBar from '@mui/material/AppBar';
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
import SignedIn from './SignedIn';
import SignedOut from '../Admin/Navbar/SignedOut';

const pages = [{ title: "Sign In", href: "auth" }];

const darkTheme = createTheme({
   palette: {
      mode: 'dark',
      primary: {
         main: '#1976d2',
      },
   },
});

const Navbar = () => {
   const [anchorElNav, setAnchorElNav] = React.useState(null);
   const [isAuthenticated, setIsAuthenticated] = React.useState(false);
   React.useEffect(() => {
      checkToken()
   }, []);

   const handleSignOut = () => {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      checkToken();
      handleCloseNavMenu()
   };

   const checkToken = () => {
      if (localStorage.getItem("token")) {
         setIsAuthenticated(true)
      } else {
         setIsAuthenticated(false)
      }
   }
   const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
   };


   const handleCloseNavMenu = () => {
      setAnchorElNav(null);
   };


   let navigate = useNavigate();

   return (
      <ThemeProvider theme={darkTheme}>


         <AppBar position="static">
            <Container maxWidth="xl">
               <Toolbar disableGutters>
                  <Typography
                     variant="h6"
                     noWrap
                     component="div"
                     sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                  >
                     ReCap
                  </Typography>

                  <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                     <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={handleOpenNavMenu}
                        color="inherit"
                     >
                        <MenuIcon />
                     </IconButton>
                     <Menu
                        id="menu-appbar"
                        anchorEl={anchorElNav}
                        anchorOrigin={{
                           vertical: 'bottom',
                           horizontal: 'left',
                        }}
                        keepMounted
                        transformOrigin={{
                           vertical: 'top',
                           horizontal: 'left',
                        }}
                        open={Boolean(anchorElNav)}
                        onClose={handleCloseNavMenu}
                        sx={{
                           display: { xs: 'block', md: 'none' },
                        }}
                     >
                        {pages.map((page) => (
                           <MenuItem key={page.title} onClick={() => navigate(page.href)}>
                              <Typography textAlign="center">{page.title}</Typography>
                           </MenuItem>
                        ))}
                     </Menu>
                  </Box>
                  <Typography
                     variant="h6"
                     noWrap
                     component="div"
                     sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                  >
                     LOGO
                  </Typography>
                  <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                     {pages.map((page) => (
                        <Button
                           key={page.title}
                           onClick={() => navigate(page.href)}
                           sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                           {page.title}
                        </Button>
                     ))}
                  </Box>
                  {isAuthenticated ? (
                     <SignedIn handleSignOut={handleSignOut} />
                  ) : <SignedOut />}
               </Toolbar>
            </Container>
         </AppBar>
      </ThemeProvider>

   );
};
export default Navbar;
