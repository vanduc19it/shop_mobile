import {  Dimensions } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Text, Box, Center, HStack, Image, Pressable, VStack,ScrollView, Flex, Checkbox, Divider } from 'native-base'
import {baseURL} from '../Url'
import { useNavigation } from '@react-navigation/native';
import Colors from '../Colors'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import NumericInput from "react-native-numeric-input"
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, getCart } from '../Redux/Actions/CartActions';
import { getShopDetail } from '../Redux/Actions/shopActions';



const CartItems = () => {

  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo} = userLogin;
  
  const navigation = useNavigation()
  // const [quantity, setQuantity] = useState(0)
  const WIDTH = Dimensions.get('window').width;
  
  const handleRemove = (idUser, idProduct) => {
    dispatch(removeFromCart(idUser, idProduct))
    dispatch(getCart(userInfo.idUser))
    navigation.navigate("Cart")
    
  }

useEffect(()=> {
    dispatch(getShopDetail(userInfo.idUser))
},[dispatch, userInfo.idUser])


const shopDetail = useSelector((state)=> state.shopDetail)
const {shopInfo} = shopDetail;
console.log(shopInfo)


  const cart = useSelector((state)=> state.cart)
  const {cartItems} = cart;

 console.log(cartItems)

  
  return (
  <ScrollView w="full" bg={Colors.submain}  showsVerticalScrollIndicator={false}>

          {
            cartItems.map((item, index) => (
              <ScrollView  showsVerticalScrollIndicator={false} horizontal  mt={2} key={index}>
              <HStack bg={Colors.white} w={WIDTH} >

                  <Box bg={Colors.white} w="12%" h="full"> 
                      <Flex alignSelf="center">
                          <Center  flex={1}>
                              <Checkbox value="test"colorScheme="green" rounded="full"  accessibilityLabel="This is checkbox" defaultIsChecked />
                          </Center>
                      </Flex>
                  </Box>

                  <Box bg={Colors.white} w="88%" mb={3}>

                    <VStack>
                        <HStack space={2} mb={3} mt={3} >
                            <Image 
                                source={{uri: shopInfo.imgShop ? `${baseURL}images/shops/`+ shopInfo.imgShop : "https://tse3.mm.bing.net/th?id=OIP.-iHHGNEt70z4UO6e_TdcfQHaIs&pid=Api" }} 
                                alt="abc" 
                                h={30}  w={30}
                                resizeMode="stretch"
                                rounded="full"
                            />
                            <Center>
                                <Text>{shopInfo.nameShop}</Text>
                            </Center>
                           
                        </HStack>
                        <HStack space={5}>
                            
                            <Image 
                                source={{uri: `${baseURL}images/products/${item.product.imgProduct}`}} 
                                alt="abc" 
                                h={100}  w={100}
                                resizeMode="stretch"
                                onPress={() => navigation.navigate("SingleProductScreen", item.product)}
                            />
                            <VStack space={2}> 
                              <Text w="95%" bold>{item.product.nameProduct}</Text>

                              <NumericInput
                                  value={item.product.quantity}
                                  totalwidth={120} 
                                  totalHeight={30} 
                                  iconSize={25} 
                                  step={1} 
                                  maxValue={15} 
                                  minValue={1}
                                  borderColor={Colors.gray} 
                                  rounded 
                                  textColor="#000" 
                                  iconStyle={{color: "#000"}}
                                  rightButtonBackgroundColor={Colors.white}
                                  leftButtonBackgroundColor={Colors.white} 
                                  onChange={(e) => console.log(e)}
                              />
                              <Text bold fontSize={13}>Giá: <Text color={Colors.red}>{item.product.unit_price} đ</Text></Text>
                            </VStack>
                           
                        </HStack>
                    </VStack>
                  </Box>
            </HStack>

                {/* nut delete */}
                <Pressable bg={Colors.red} w={WIDTH*0.19} onPress={()=>handleRemove(item.idUser, item.product.idProduct)} >
                  <Flex alignSelf="center" >
                      <Center  flex={1}>
                        <Ionicons name="trash" size={34} color="white" /> 
                      </Center>
                  </Flex>
                </Pressable>
          </ScrollView> 

            ))
          }
      
          
        

          

          
         
          

   

        
    </ScrollView>
  );
};

export default CartItems;