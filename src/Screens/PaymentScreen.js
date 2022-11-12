import { Box, Center, FormControl, HStack, Image, Input, ScrollView, Spacer, Text, VStack} from 'native-base'
import React from 'react'
import Buttone from '../Components/Buttone'
import {Ionicons,FontAwesome} from '@expo/vector-icons';
const paymentMethods = [
  {
    image: require("../../assets/shop.png"), 
    alt: "shipcod",
    icon: "Ionicons",
  },
  {
    image: require("../../assets/shop.png"), 
    alt: "momo",
    icon: "fontAwesome",
  },
  {
    image: require("../../assets/shop.png"), 
    alt: "shoppepay",
    icon: "Ionicons",
  },
 
]

function PaymentScreen() {
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
            py={1}
            justifyContent="space-between"
            rounded={10}
            
            >
            <Box>
              <Image source={i.image} alt={i.alt} 
              resizeMode="contain"
              w={60} h={50}
              />
            </Box>
            {i.icon === "Ionicons" ? (
                <Ionicons name="checkmark-circle" size={30} color="#000"/>
            )
              : 
              (
                <FontAwesome name="circle-thin" size={30} color="#000"/>
              )
            }
            
            </HStack>
          ))}
        
          <Buttone bg="#66aff6" color="#fff">CONTINUE</Buttone>
          <Text italic textAlign="center">Payment method is <Text italic bold>Shipcod</Text>
          </Text>
        </VStack>
      </ScrollView>
    </Box>
  </Box>

  ) 
}

export default PaymentScreen