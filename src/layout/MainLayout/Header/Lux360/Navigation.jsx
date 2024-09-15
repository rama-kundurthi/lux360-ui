import React from 'react';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useDispatch, useSelector } from 'react-redux';

// project imports
import { MENU_OPEN, SET_MENU } from 'store/actions';

const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const itemHandler = (id) => {
        dispatch({ type: MENU_OPEN, id });
        dispatch({ type: SET_MENU, opened: true });
        navigate(`/${id}`);
    }
  return (
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button color="inherit" onClick={() => itemHandler('features')}>Features</Button>
          <Button color="inherit" onClick={() => itemHandler('how-it-works')}>How it works</Button>
          <Button color="inherit" onClick={() => itemHandler('pricing')}>Pricing</Button>
          <Button color="inherit" onClick={() => itemHandler('blog')}>Blog</Button>
          <Button color="inherit" onClick={() => itemHandler('privacy')}>Privacy</Button>
        </Box>
  );
};

export default Navbar;
