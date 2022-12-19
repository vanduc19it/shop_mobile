import React from 'react'
import { Box, Center, Text } from 'native-base'
import { Entypo } from '@expo/vector-icons';
import Buttone from './Buttone';
import Colors from '../Colors'
import { useNavigation } from '@react-navigation/native';

export default function CartEmpty() {
  const navigation = useNavigation()
  return (
    <Box flex={1} px={4} bg={Colors.lightblue}>
        <Center h='80%'>
            <Center w={200} h={200} bg="#fff" rounded="full" mb={4}>
              <Entypo name="shopping-bag" size={64} color="#66aff6" />
            </Center>
            <Text color={Colors.white} bold mt={5} fontSize={22}>GIỎ HÀNG TRỐNG</Text>
        </Center>
        <Buttone bg="#000" color="#fff" mb={30} onPress={()=> navigation.navigate("Home")} >SHOPPING NGAY</Buttone>   
    </Box>
  )
}