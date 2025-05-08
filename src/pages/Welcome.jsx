import React from 'react'
import { Box } from "@mui/material";
import fondImage from '../assets/Welcome-screen.svg'
import backgroundImage from '../assets/imgwelcome.svg'
import WatchIcon  from '../assets/icons/folder.svg'

const Welcome = () => {
  return (
    <Box
      sx={{
        position:'relative',
        width:'100vw',
        height:'100vh',
        overflow:'hidden',
      }}>

        <Box
          sx={{
            position:'absolute',
            width:'100%',
            height:'100%',
            // backgroundImage:`url(${fondImage})`,
            backgroundColor:'blueviolet',
            zIndex:1
          }}
          >
        </Box>
        <Box
          sx={{
            position:'absolute',
            width:'100%',
            height:'100%',
            backgroundImage:`url(${backgroundImage})`,
            backgroundSize:'contain',
            backgroundPosition:'center',
            zIndex:2,
            backgroundRepeat:'no-repeat'
          }}>
        </Box>
      </Box>   
  )
}

export default Welcome