import { Box } from '@mui/material'
import React, {useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Trending from './Trending'
import { useAuth } from '../components/AuthContext'

const Home = () => {
  const {user} = useAuth()
  console.log('USER EN HOME ', user)
  const navigate = useNavigate()
  useEffect(
    () => {
    if (!user) {
      navigate('/')
    }
  }, [user])
  return (
    <>
      <Box>
        <Trending text='home'/>

      </Box>
      {console.log('USER EN HOME ', user)}
      
    </>
  )
}

export default Home