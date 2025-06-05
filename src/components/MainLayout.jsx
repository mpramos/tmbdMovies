import { Box } from '@mui/material'
import React from 'react'
import Sidebar from './Sidebar'
import { DynamicNavBar } from './DynamicNavBar'
import { Outlet } from 'react-router-dom'

const MainLayout = ({ children }) => {
  return (
    <Box sx={{
      display: 'flex',
      height: '100vh',
      width: '98.9vw',
    }}
    >
      <Sidebar />
      <Box sx={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        height: '100vh',
      }}>
        <DynamicNavBar />
        <Box sx={{
          flex: 1,
          overflowY: 'auto',
          backgroundColor: '#1E1E1E',
        }}>
          {children}
          <Outlet />
        </Box>
      </Box>
    </Box>
  )
}

export default MainLayout