import React from 'react'
import Tabs from '../Components/Profile/Tabs'
import { Box, VStack, Text, HStack, Flex  } from 'native-base'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Colors';
import { useNavigation } from '@react-navigation/native';
const ManageOrderScreen = () => {
  
    const navigation = useNavigation()

  return (
    <Box w="full" h="full">
        <Flex bg={Colors.white}  pt={5} pb={5} p={5} >
            <HStack>
            <AntDesign name="leftcircleo" size={24} color={Colors.red} onPress={() => navigation.navigate("Profile")} />
            <Text fontSize={18} color={Colors.black} ml={5}>Đơn hàng của tôi</Text>
            </HStack>
        </Flex>
        <Tabs/>
    </Box>
  )
}

export default ManageOrderScreen