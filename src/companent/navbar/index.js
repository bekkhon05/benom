import { Box, Grid } from '@mui/material'
import React from 'react'
import Menu from "./123321.jpg"
function Navbar() {
  return (
    <Box>
      <Grid sx={{
        width:{lg:"110px", md:"100px",sm:"90px", xs:"70px"}
      }}>
        <img style={{width:"100%", height:"100%"}} src={Menu} alt="" />


      </Grid>
    </Box>
  )
}

export default Navbar