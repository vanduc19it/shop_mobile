import { View, Text } from 'react-native'
import React from 'react'
import { Box, Center } from 'native-base'
import { Entypo } from '@expo/vector-icons';
import Buttone from './Buttone';

export default function CartEmpty() {
  return (
    <Box flex={1} px={4}>
        <Center h='90%'>
            <Center w={200} h={200} bg="#fff" rounded="full">
            <Entypo name="shopping-bag" size={64} color="#66aff6" />
            </Center>
            <Text color="#fff" bold mt={5}>
                GIO HANG TRONG
            </Text>
        </Center>
        <Buttone bg="#000" color="#fff">SHOOPING THUI</Buttone>
        
    </Box>
  )
}