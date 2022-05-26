



import MenuIcon from '@mui/icons-material/Menu';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Modal from '@mui/material/Modal';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useEffect } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { format } from "timeago.js";
import { useDispatch, useSelector } from 'react-redux'
import { ADDWORKOUTS, MANAGEWORKOUTS } from '../../constances/CommonConstants';
import { BLOG, LOGOUT, MY_PROFILE, MY_WORKOUTS, WORKOUTS } from '../../constances/HomePageConstants';
import { getAllNewTrainer } from '../../actions/AdminActions.js'
import { logoutAdmin } from '../../actions/AdminActions.js'
import './HeaderAdmin.css';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    height: 'auto',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const HeaderAdmin = () => {
    const navigate = useNavigate()
    const { adminVerify: { adminInfo, logoutSucess } } = useSelector((state) => {
        return state
    })
    useEffect(() => {
        if (!adminInfo) {
            navigate('/adminlogin')
        }
        if (logoutSucess) {
            navigate('/adminlogin')
        }
    }, [logoutSucess])


    useEffect(() => {
        dispatch(getAllNewTrainer())
    }, [])

    const { newTrainer: { newTrainers } } = useSelector((state) => {
        return state
    })
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleOpen = () => setOpen2(true);
    const handleClose = () => setOpen2(false);

    let trainer = true
    const [anchorEl, setAnchorEl] = React.useState(null);


    const logout = () => {
        dispatch(logoutAdmin())
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
                    <Link to={'/admin'}> <img alt='' height={'100px'} src='/images/profile/logo.png'></img></Link>
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
                        sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                        {WORKOUTS}
                    </Button>

                    <Button

                        onClick={handleCloseNavMenu}
                        sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                        {BLOG}
                    </Button>

                    <Button

                        onClick={handleOpen}
                        sx={{ my: 2, color: 'black', display: 'block' }}
                    >
                        Accept Trainers
                    </Button>

                </Box>



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
                            <Typography onClick={() => {
                                logout()
                            }} textAlign="center">{LOGOUT}</Typography>

                        </MenuItem>


                    </Menu>
                </Box>}

            </Toolbar>
            <div style={{ width: '50%' }}>
                <Modal

                    open={open2}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style}>
                        {newTrainers.map((trainer) => (


                            <>
                                <div className='modal1' >
                                    <div className='img-container'>
                                        <img className='img' src={trainer.profilephoto}></img>
                                    </div>
                                    <div className='details'>
                                        <Link style={{ color: 'gray', fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: '18px' }} to={`/trainer/${trainer._id}`}>  {trainer.name}</Link> Registered
                                    </div>
                                    <div className='time'>
                                        {format(trainer.createdAt)}
                                    </div>
                                </div>
                                <hr></hr>
                            </>))}


                    </Box>
                </Modal>
            </div>
        </AppBar>
    )
}

export default HeaderAdmin
