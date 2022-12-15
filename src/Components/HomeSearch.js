import { HStack, Input, Pressable, Text, Box, Icon } from 'native-base'
import React, { useEffect } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Colors'
import { EvilIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { getCart } from '../Redux/Actions/CartActions';

export default function HomeSearch() {
    const navigation = useNavigation()
 
  
  
  const cart = useSelector((state)=> state.cart)
  const {cartItems} = cart;

  console.log(cartItems)
  return (
    <HStack 
        space={3} 
        w="full" 
        px={6} 
        bg={Colors.bar} 
        py={4} 
        alignItems="center"
        safeAreaTop
    >
        <Input placeholder="Tìm kiếm sản phẩm"
            w="85%"
            bg={Colors.white}
            type="search"
            variant="filled"
            h={12}
            fontSize={14}
            borderWidth={0}
            _focus={{
                bg: Colors.white
            }}
            InputLeftElement={<Icon as={<EvilIcons name="search"  />} size={7} ml="2" color={Colors.black} />}
        />
        <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
            <FontAwesome name="shopping-bag" size={24} color={Colors.white} />
            <Box px={1} rounded="full" position="absolute" top={-13} left={2} bg={Colors.red} 
            _text={{
                color: "#fff",
                fontSize:"11px" 
                 }}
            >
                {/* {cartItems.length}    */}5
            </Box>
        </Pressable>
    </HStack>
  )
}
