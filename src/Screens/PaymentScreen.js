import { Box, Center, Checkbox, HStack, Image, ScrollView, Text, VStack} from 'native-base'
import React from 'react'
import Buttone from '../Components/Buttone'
import { useNavigation } from '@react-navigation/native';
import Colors from '../Colors';
const paymentMethods = [
  {
    image: require("../../assets/shipcod.jpg"), 
    alt: "shipcod",
    name: "Thanh toán khi nhận hàng"
  },
  {
    image: require("../../assets/MoMo.jpg"), 
    alt: "momo",
    name: "Thanh toán qua ví Momo"
  },
  {
    image: require("../../assets/banking.jpg"), 
    alt: "shoppepay",
    name: "Tài khoản ngân hàng"
  },
 
]

function PaymentScreen() {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg="#66aff6" py={5}> 
    <Center pb={15}>
      <Text color="#fff" fontSize={14} bold>
        SELECT PAYMENT METHOD
      </Text>
    </Center>
    <Box h="full" bg="#fff" px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={6} mt={5}>
          {paymentMethods.map((i, index) =>(
            <HStack
            key={index}
            alignItems="center"
            bg="#66aff6"
            px={3}
            py={2}
            justifyContent="space-between"
            rounded={10}
            
            >
            <Box>
              <Image source={i.image} alt={i.alt} 
              resizeMode="contain"
              w={60} h={50}
              />
            </Box>
            <Text bold color={Colors.white}>{i.name}</Text>
            <Checkbox value="test"colorScheme="green" rounded="full"  accessibilityLabel="This is checkbox" defaultIsChecked />
                          
            
            </HStack>
          ))}
        
          <Buttone bg="#66aff6" color="#fff" onPress={()=> navigation.navigate("Order")}>Xác nhận</Buttone>
          <Text italic textAlign="center">Payment method is <Text italic bold>Shipcod</Text>
          </Text>
        </VStack>
      </ScrollView>
    </Box>
  </Box>

  ) 
}

export default PaymentScreen