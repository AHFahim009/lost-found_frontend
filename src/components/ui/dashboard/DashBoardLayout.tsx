"use client"

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import { ReactNode } from "react"
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';

const drawerWidth = 240;


const DashboardLayout = ({ children }: { children: ReactNode }) => {

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isClosing, setIsClosing] = React.useState(false);

  const handleDrawerClose = () => {
    setIsClosing(true);
    setMobileOpen(false);
  };

  const handleDrawerTransitionEnd = () => {
    setIsClosing(false);
  };

  const handleDrawerToggle = () => {
    if (!isClosing) {
      setMobileOpen(!mobileOpen);
    }
  };




  return (
    <Box sx={{ display: 'flex', }}>
      {/* dashboard navbar */}
      <AppBar
        className='header-section'
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          backgroundColor: "#c4d3e3",
          color: "black",
          boxShadow: 0
        }}
      >
        <Toolbar >
          {/* mobile menu icon */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Header />
        </Toolbar>
      </AppBar>
      {/* dashboard sidebar box */}
      <Box
        component="nav"
        sx={{
          width: { sm: drawerWidth }, flexShrink: { sm: 0 },
        }}
        aria-label="mailbox folders"
      >
        {/* for mobile drawer */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onTransitionEnd={handleDrawerTransitionEnd}
          onClose={handleDrawerClose}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          <Sidebar />
        </Drawer>
        {/*for desktop drawer  */}
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },

            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, border: "none", background: "#ececec" },
          }}
        >
          <Sidebar />

        </Drawer>
      </Box>
      {/* dashboard main content */}
      <Box
        className="main-container"
        component="main"
        sx={{ flexGrow: 1, p: 3, height: "100vh", width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Box >
          {children}
        </Box>
      </Box>
    </Box >
  );
}


export default DashboardLayout