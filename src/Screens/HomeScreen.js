import { Box, Text, View } from 'native-base'
import React from 'react'
import Category from '../Components/Category'

import HomeProducts from '../Components/HomeProducts'
import HomeSearch from '../Components/HomeSearch'
import Slider from '../Components/Slider'
function HomeScreen() {
  return (
    <Box flex={1} bg="#fff"> 
        <HomeSearch/>
        <HomeProducts/>
    </Box>
  )
}

export default HomeScreen