import { Box, Center, Image, Text, View, VStack,Button } from 'native-base'
import React from 'react'
import Buttone from '../Components/Buttone'

function NotVerifyScreen() {
  return (
    <Box flex={1} bg="#66aff6" safeAreaTop> 
        <Center w="full" h={250}>
          <Image source={require("../../assets/shop.png")}
          alt="logo"
          size="lg"
          />
        </Center>
        <VStack space={6} px={5} alignItems="center">
          <Buttone color="#fff" bg="#000">REGISTER</Buttone>
          <Buttone color="#000" bg="#fff">LOGIN</Buttone>
        </VStack>
    </Box>
  ) 
}

export default NotVerifyScreen