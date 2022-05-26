import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Logout } from '../actions/userActions';
import { FREE_WORKOUTS, LOGOUT, MY_PROFILE, MY_WORKOUTS, PROGRAMS, TRAINER, WORKOUTS } from '../constances/HomePageConstants';
import './Header.css';


const ResponsiveAppBar = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [log, setLog] = useState(false)
  const { user: { userInfo } } = useSelector(state => state)



  useEffect(() => {




  }, [])



  //logout fuction
  const logout = () => {
    dispatch(Logout())

    navigate('/login')

  };

  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar className='main_header' position="static">

      <Toolbar className='header mx-5' disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          <Link to={'/'}> <img alt='' height={'100px'} src='/images/profile/logo.png'></img></Link>
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

            <MenuItem onClick={handleCloseNavMenu}>
              <Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {FREE_WORKOUTS}
              </Button>
              <Link style={{ textDecorationLine: 'none' }} to={'/programs'}>  <Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {PROGRAMS}
              </Button></Link>
              <Link style={{ textDecorationLine: 'none' }} to={'/workout'}>      <Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {WORKOUTS}
              </Button>       </Link>



              {!userInfo && <Link to={'/trainerlogin'} style={{ textDecorationLine: "none" }}><Button

                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'black', display: 'block' }}
              >
                {TRAINER}
              </Button></Link>}
            </MenuItem>

          </Menu>
        </Box>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
        >
          Health Coach
        </Typography>
        <Box sx={{ justifyContent: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          <Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {FREE_WORKOUTS}
          </Button>
          <Link style={{ textDecorationLine: 'none' }} to={'/programs'}>  <Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {PROGRAMS}
          </Button></Link>
          <Link style={{ textDecorationLine: 'none' }} to={'/workout'}>      <Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {WORKOUTS}
          </Button>       </Link>


          {/* <Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {ABOUT}
          </Button> */}
          {!userInfo && <Link to={'/trainerlogin'} style={{ textDecorationLine: "none" }}><Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {TRAINER}
          </Button></Link>}


        </Box>
        {userInfo && <Typography className='username'>{userInfo.name}</Typography>}
        {!userInfo && <Link to={'/login'} style={{ textDecorationLine: 'none' }} >  <Button sx={{ marginRight: "9px" }} variant="outlined" >
          Login
        </Button></Link>}
        {!userInfo && <Link to={'/signup'} style={{ textDecorationLine: 'none' }}><Button sx={{ marginRight: "9px" }} variant="outlined" >
          Signup
        </Button></Link>}
        {/* {user && <Button onClick={logout} sx={{ marginRight: "9px" }} variant="outlined" >
          Logout
        </Button>} */}

        {userInfo &&
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
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
              <MenuItem onClick={handleCloseUserMenu}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/myprofile'}><Typography textAlign="center">{MY_PROFILE}</Typography></Link>

              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={'/myworkouts'}><Typography textAlign="center">{MY_WORKOUTS}</Typography></Link>

              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography onClick={logout} textAlign="center">{LOGOUT}</Typography>

              </MenuItem>


            </Menu>
          </Box>
        }
      </Toolbar>
    </AppBar>
  );
};
export default ResponsiveAppBar;

