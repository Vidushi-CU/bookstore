import React, { useState } from 'react'
import {AppBar,Typography,Toolbar,Tabs,Tab} from '@mui/material';
// import MenuBookIcon from '@mui/icons-material/MenuBook';
import { NavLink } from "react-router-dom";
import "./Header.css";



const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:'#fff', height:'80px'}} position="sticky">
            <Toolbar>
                <NavLink to="/" style={{color:"white"}}>
                <Typography>
                    {/* <MenuBookIcon/> */}
                </Typography>
                </NavLink>
                <div class="v502_520"></div>
                <Tabs
                
                sx={{ml:'auto'}}
                  indicatorColor="primary"  value={value} onChange={(e,val)=>setValue(val)} TabIndicatorProps={{
                    style: {
                      backgroundColor: "#D97D54"
                     }
                    }}>
                    <Tab sx={{top:'10px', fontWeight:'bold', fontSize:'10px', color:'black' }} LinkComponent={NavLink} to="/" label='Home'/>
                    <Tab sx={{top:'10px', fontWeight:'bold', fontSize:'10px', color:'black' }} LinkComponent={NavLink} to="/add" label='Add Products'/>
                    <Tab sx={{top:'10px', fontWeight:'bold', fontSize:'10px', color:'black' }} LinkComponent={NavLink} to="/books" label='All Products'/>
                    <Tab sx={{top:'10px', fontWeight:'bold', fontSize:'10px', color:'black' }} LinkComponent={NavLink} to="/about" label='About us'/>
                </Tabs>
            </Toolbar>
        </AppBar>

        
        {/* <div class="v502_520"></div>
      <div class="v502_526">
        <Toolbar>
        <div class="v502_527">
            <Tabs>
          <Tab LinkComponent={NavLink} to="/add" label='Add Products' class="v502_528"/>
          <Tab LinkComponent={NavLink} to="/books" label='All Products' class="v502_529"/>
          <Tab LinkComponent={NavLink} to="/about" label='About us' class="v502_530"/>
          <span class="v502_531">COLLECTIONS</span
          ><span class="v502_532">CONTACT</span>
          </Tabs>
        </div>
        <div class="v502_533"><div class="v502_534"></div></div>
        <div class="v502_535"><div class="v502_536"></div></div>
        <div class="v502_537"><div class="v502_538"></div></div>
        <div class="v502_539"><div class="v502_540"></div></div>
        </Toolbar>
      </div> */}
    </div>
  )
}

export default Header