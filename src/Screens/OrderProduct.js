import { useNavigation } from '@react-navigation/native'
import { Box, Center, FormControl, HStack, Input, ScrollView, Text, VStack} from 'native-base'
import React from 'react'
import Buttone from '../Components/Buttone'
import Colors from '../Colors'


function OrderProduct() {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}> 
      <Center pb={15}>
        <Text color="#fff" fontSize={14} bold>
          TIẾN HÀNH THANH TOÁN
        </Text>
      </Center>
      <Box h="full" bg="#fff" px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
           
            <HStack>
              <Text>Văn Đức</Text>
              <Text>0354941620</Text>
            </HStack>
            <Text>Trường Đại học cntt và tt Viet Han Da Nag Viet Nam</Text>
          
            <Buttone bg={Colors.red} color={Colors.white} onPress={()=> navigation.navigate("Order")}>ĐẶT HÀNG</Buttone>

          </VStack>
        </ScrollView>
      </Box>
    </Box>
  ) 
}

export default OrderProduct