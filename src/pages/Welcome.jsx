import React from 'react'
import { Box, Button, Typography } from "@mui/material";
import fondImage from '../assets/welcomefond.svg'
import backgroundImage from '../assets/imgwelcome.svg'
import WatchIcon from '../assets/icons/folder.svg'

const Welcome = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
      }}
    >
      <Box
        component="img"
        src={fondImage}
        sx={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          zIndex: 1,
          top: 0,
          left: 0,
          objectFit: 'cover',
        }}
      >
      </Box>
      <Box
        component="img"
        src={backgroundImage}
        alt="background"
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100vw',
          height: '120vh',
          objectFit: 'cover',
          zIndex: 2
        }}>
      </Box>
          <Box
            sx={{
              position:'relative',
              zIndex: 3,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100vh',
              color: 'white',
              textAlign: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '10px',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: '20px'}}
                >
            <img 
              src={WatchIcon}
              alt="watch icon" 
              style={{
                width:'50px',
                height:'50px',
              }}/>
            <Typography 
              variant='h4'
              sx={{ 
                fontWeight: 'bold',
                 }}>
                  WATCH
              </Typography>
            </Box>
            <Typography 
              variant='body1'
              sx={{ 
                marginBottom: '20px' }}>
                  Enjoy the newest movies
                </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: '#6100C2',
              padding: '10px  60px',
              marginBottom: '20px',
              '&:hover': {
                backgroundColor: '#3700b3',
              },
            }}
          > Log in
          </Button>
          <Typography 
            variant='body2'>
                No account? {' '}
                <a href='#' style={{ color: 'white' }}>Sign up</a>
              </Typography>
          </Box>
    </Box>
  )
}

export default Welcome