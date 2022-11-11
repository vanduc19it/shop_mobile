import { Box, Text, View } from 'native-base'
import React from 'react'
import HomeProducts from '../Components/HomeProducts'
import HomeSearch from '../Components/HomeSearch'

function HomeScreen() {
  return (
    <Box flex={1} bg="#fff"> 
        <HomeSearch/>
        <HomeProducts/>
    </Box>
  )
}

export default HomeScreen