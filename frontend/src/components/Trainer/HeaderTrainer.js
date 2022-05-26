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
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { LogoutTrainer } from '../../actions/TrainerActions';
import { ADDWORKOUTS, MANAGEWORKOUTS } from '../../constances/CommonConstants';
import { BLOG, LOGOUT, MY_PROFILE, MY_WORKOUTS, TRAINER, WORKOUTS } from '../../constances/HomePageConstants';


const HeaderTrainer = () => {
  const dispatch = useDispatch()
  const [trainer, setTrainer] = useState()
  const navigate = useNavigate()
  useEffect(() => {
    const trainer = localStorage.getItem('trainer')
    console.log(trainer);
    if (!trainer) {
      navigate('/trainerlogin')
    }
    setTrainer(trainer)
  }, [])

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {

    console.log("rererere");
    dispatch(LogoutTrainer())
    navigate('/trainerlogin')



  }
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
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>

      </Menu>

      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >


        <Link style={{ textDecorationLine: "none", color: 'black' }} to={'/AddWorkoutScreen'} >   <MenuItem onClick={handleClose}>{ADDWORKOUTS}</MenuItem></Link>
        <Link style={{ textDecorationLine: "none", color: 'black' }} to={'/manageworkouts'} >   <MenuItem onClick={handleClose}>{MANAGEWORKOUTS}</MenuItem></Link>


      </Menu>



      <Toolbar className='header mx-5' disableGutters>
        <Typography
          variant="h6"
          noWrap
          component="div"
          sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
        >
          <Link to={'/trainer'}> <img alt='' height={'100px'} src='/images/profile/logo.png'></img></Link>
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
              <Typography className='text-dar' textAlign="center">fdfdff</Typography>
            </MenuItem>

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
        <Box sx={{ justifyContent: 'center', flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

          <Button

            onClick={handleClick}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {WORKOUTS}
          </Button>
          {/* <Button

            onClick={handleClick2}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {PROGRAMS}
          </Button> */}
          {/* <Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {WORKOUTS}
          </Button> */}
          <Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {BLOG}
          </Button>
          {/* <Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {ABOUT}
          </Button> */}
          <Link to={'/trainer-signup'} style={{ textDecorationLine: "none" }}><Button

            onClick={handleCloseNavMenu}
            sx={{ my: 2, color: 'black', display: 'block' }}
          >
            {TRAINER}
          </Button>
          </Link>
        </Box>

        {/* {user && <Typography className='username'>{user.name}</Typography>}
      {!user && <Link to={'/login'} >  <Button sx={{ marginRight: "9px" }} variant="outlined" >
        Login
      </Button></Link>} */}
        {/* {!user && <Link to={'/signup'}><Button sx={{ marginRight: "9px" }} variant="outlined" >
        Signup
      </Button></Link>} */}
        {/* {trainer && <Button onClick={logout} sx={{ marginRight: "9px" }} variant="outlined" >
          Logout
        </Button>} */}


        {trainer && <Box sx={{ flexGrow: 0 }}>
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
              <Link style={{ textDecoration: 'none', color: 'black' }} to={'/trainerprofile'}><Typography textAlign="center">{MY_PROFILE}</Typography></Link>

            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Link style={{ textDecoration: 'none', color: 'black' }} to={'/myworkouts'}><Typography textAlign="center">{MY_WORKOUTS}</Typography></Link>

            </MenuItem>
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography onClick={logout} textAlign="center">{LOGOUT}</Typography>

            </MenuItem>


          </Menu>
        </Box>}

      </Toolbar>
    </AppBar>
  )
}

export default HeaderTrainer
