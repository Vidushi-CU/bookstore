import { Box, Typography } from '@mui/material'
import React from 'react'
//import cartImg from "../Images/cart.png";


const About = () => {

  return (
    <div className='about-div'>
      <Box display="flex" flexDirection={"column"} alignItems="center">
        <Typography sx={{fontFamily:"fantasy"}} variant="h2">This is a Full Stack Mern Website</Typography>
        <Typography variant="h3">Made By : Vidushi, Taniya, Anshuman </Typography>
      </Box>
      <div>
        {/* <img style={" margin:'auto'"} src="cart.png" alt="" /> */}
      </div>
    </div>
  )
}

export default About