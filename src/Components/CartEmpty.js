import { View, Text } from 'react-native'
import React from 'react'
import { Box, Center } from 'native-base'
import { Entypo } from '@expo/vector-icons';
import Buttone from './Buttone';
import Colors from '../Colors'

export default function CartEmpty() {
  return (
    <Box flex={1} px={4} bg={Colors.green}>
        <Center h='80%'>
            <Center w={200} h={200} bg="#fff" rounded="full" mb={4}>
              <Entypo name="shopping-bag" size={64} color="#66aff6" />
            </Center>
            <Text color={Colors.white} bold mt={10} fontSize={24}>GIỎ HÀNG TRỐNG</Text>
        </Center>
        <Buttone bg="#000" color="#fff" mb={30} >SHOPING THUI</Buttone>   
    </Box>
  )
}