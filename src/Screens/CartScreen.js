import { Box, Button, Center, HStack, ScrollView, Text, View } from 'native-base'
import React, {useEffect} from 'react'
import Buttone from '../Components/Buttone'
import CartEmpty from '../Components/CartEmpty'
import CartItems from '../Components/CartItems'
import { useDispatch, useSelector } from "react-redux";
import { addToCart, getCart } from "../Redux/Actions/CartActions"
import Colors from '../Colors'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function CartScreen() {

  const dispatch = useDispatch();

  const navigation = useNavigation()

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo} = userLogin;


useEffect(()=> {
    dispatch(getCart(userInfo.idUser))
},[dispatch, userInfo.idUser])


const cart = useSelector((state)=> state.cart)
const {cartItems} = cart;


  return (
    <Box flex={1} safeAreaTop bg={Colors.main} >
      <HStack>
        <Center ml={4}>
        <AntDesign name="leftcircleo" size={24} color={Colors.black} onPress={() => navigation.navigate("Home")} />
        </Center>
     
          <Center w="full"  pt={4} pb={4} pr={10} >
            <Text color={Colors.white} fontSize={18} bold >
              Giỏ hàng ({cartItems.length})
            </Text>
          </Center>
      </HStack>

      {
        cartItems.length ?
         (
          <>
             <CartItems cartItems={cartItems}/>

              <HStack  bg={Colors.white} borderColor={Colors.gray} borderWidth={1} shadow={1}>
                <Center>
                <Text bold italic fontSize={15} p={8}>Tổng tiền: <Text color={Colors.red}>1234500 đ</Text></Text>
                </Center>
                
                <Center>
                  <Button 
                      bg={Colors.red} 
                      color={Colors.white}  
                      rounded={0} ml={4} 
                      leftIcon={<MaterialCommunityIcons name="cart-variant" size={24} color="white" />}
                      onPress={()=> navigation.navigate("OrderProduct")}
                  >
                        Mua hàng 
                  </Button>
                </Center>
              </HStack>
          </>
        )

        : (
          <CartEmpty/>
        )
      }
      
       
    
    </Box>

  )
}

export default CartScreen