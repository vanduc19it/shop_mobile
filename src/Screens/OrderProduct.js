import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, Checkbox, Divider, Flex, HStack, Image, Input, ScrollView, Text, VStack,useToast, AlertDialog} from 'native-base'
import React, { useEffect, useRef, useState } from 'react'
import Colors from '../Colors'
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux'
import {baseURL} from '../Url'
import { createOrder } from '../Redux/Actions/orderActions'
import { getShopDetail } from '../Redux/Actions/shopActions';

function OrderProduct() {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const cart = useSelector((state)=> state.cart)
  const {cartItems} = cart;

  // tong price all sp
  const itemsPrice = cartItems.reduce((total, curr) => total + curr.product.quantity * curr.product.unit_price, 0)

  //phi ship
  const shippingPrice = itemsPrice > 300000 ? 0 : 15000;

  //tong phi ship voi sp
  const totalPrice = itemsPrice + shippingPrice;


  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef(null);
  const toast = useToast()
  const onClose = () => {setIsOpen(false);}

  const handleOpenAlert = () => {
    
      setIsOpen(true)
    
  }

  console.log(cartItems)
  const handleOrderProduct = () => {
    dispatch( 
      createOrder({
        orderItems: cartItems,
        idShop: shopInfo._id,
        shippingInfo: "Trường ĐH CNTT & TT Việt Hàn, 470 Trần Đại Nghĩa, Đà Nẵng, Việt Nam",
        paymentMethod: "shipcod",
        itemsPrice: itemsPrice,
        shippingPrice: shippingPrice,
        totalPrice: totalPrice,
    }))
    setIsOpen(false);
    toast.show({
      render: () => {
        return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                Đặt hàng thành công
              </Box>;
      },
      duration: 2000,
    })
    navigation.navigate("Home")
  }

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo} = userLogin;

  useEffect(()=> {
    dispatch(getShopDetail(userInfo.idUser))
  },[dispatch, userInfo.idUser])


  const shopDetail = useSelector((state)=> state.shopDetail)
  const {shopInfo} = shopDetail;
  console.log(shopInfo)
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}> 
       <HStack>
        <Center ml={4} mb={4}>
          <AntDesign name="leftcircleo" size={24} color={Colors.white} onPress={() => navigation.navigate("Cart")} />
        </Center>
     
          <Center w="full"   pb={4} pr={10} >
            <Text color={Colors.white} fontSize={16} bold >
              TIẾN HÀNH THANH TOÁN
            </Text>
          </Center>
      </HStack>
       
      <Box h="full" bg="#fff">
        
        <ScrollView showsVerticalScrollIndicator={false} bg={Colors.submain}>
          {/* dia chi */}
          <HStack bg={Colors.gray} space={2} >
              <Box w="15%" bg={Colors.submain}>
                <Flex  alignSelf="center" mt={5} >
                  <Center>
                    <EvilIcons name="location" size={26} color="black" />
                  </Center>
                
                </Flex>
              </Box>  
              <VStack space={2} mt={5} w="85%" pr={4} >      
              <HStack space={2} >
                <Text bold fontSize="15px">Văn Đức</Text>
                <Text bold fontSize="15px">(+84) 0354941620</Text>            
              </HStack>
              <Text color={Colors.darkgray} fontSize="14px" mb={4}>Trường ĐH CNTT & TT Việt Hàn, 470 Trần Đại Nghĩa, Đà Nẵng, Việt Nam</Text>
            </VStack>
          </HStack>
          {/* item */} 
          {
            cartItems.map((item) => (
              <Box bg={Colors.white} w="full" mb={2} px={5} key={item._id}>
              <VStack>
                  <HStack space={2} mb={3} mt={3}>
                      <Image 
                          source={{uri: shopInfo.imgShop ? `${baseURL}images/shops/`+ shopInfo.imgShop : "https://tse3.mm.bing.net/th?id=OIP.-iHHGNEt70z4UO6e_TdcfQHaIs&pid=Api" }} 
                          alt="abc" 
                          h={30}  w={30}
                          resizeMode="stretch"
                          rounded="full"
                      />
                      <Center>
                          <Text bold>{shopInfo.nameShop}</Text>
                      </Center>
                    
                  </HStack>
                  <HStack space={5}>
                      
                      <Image 
                          source={{uri: `${baseURL}images/products/${item.product.imgProduct}`}}  
                          alt="abc" 
                          h={100}  w={100}
                          resizeMode="stretch"
                          onPress={() => navigation.navigate("SingleProductScreen")}
                      />
                      <VStack space={2} w="64%"> 
                        <Text mt={1} bold>{item.product.nameProduct}</Text>

                      
                        <Text bold mt={2}>Giá: <Text color={Colors.red}>{item.product.unit_price} đ</Text></Text>
                        <Flex alignItems="flex-end" w="full">
                        <Text >x {item.product.quantity}</Text>
                        </Flex>
                      </VStack>
                    
                  </HStack>
                  <HStack>
                      <Box w="80%"  mt={5}>
                          <Input borderWidth={0} fontSize={14}  
                          _focus={{
                            bg: Colors.white,
                            borderColor: Colors.white,
                       
                            }} placeholder="Tin nhắn cho người bán" color={Colors.darkgray}/>
                      </Box>
                      <Box w="20%" mt={5}>
                        <HStack>
                            <Text mt={3}>Chat ngay </Text>
                            <Box mt={5}><AntDesign name="right" size={8} color="#ccc" /> </Box>
                        </HStack>        
                          
                      </Box>
                  </HStack>
                  <Divider bg="emerald.500" thickness="1"/>
                  <Flex alignItems="flex-end" pt={2} pb={2}>
                      <Text >{item.product.quantity} mặt hàng, tổng cộng: <Text bold color= {Colors.red}>{item.product.quantity * item.product.unit_price} đ</Text> </Text>
                  </Flex>
              </VStack>
          </Box>
            ))
          }

          {/* phuong thuc thanh toan */}
          <VStack w="full" mb={2}  bg={Colors.white} pb={4}>
          <HStack>
              <Box w="70%"  mt={2} ml={2}>
                <Text ml={2} bold color={Colors.black}>Phương thức thanh toán </Text>
              </Box>
              <Box w="30%" mt={2}>
                <HStack>
                    <Text color={Colors.darkgray}>Xem tất cả </Text>
                    <Box  mt={1}><AntDesign name="right" size={14} color="#ccc" /> </Box>
                </HStack>        
                   
              </Box>
            </HStack>
            <Box>
              <VStack space={6}>
                <HStack space={10}>
                <Box w="15%">
                  <Image source={require("../../assets/shipcod.jpg")}
                    alt="logo"
                    size="sm"
                    h={8}  w={8}
                    resizeMode="stretch"
                    ml={4}
                  />
                  </Box>
                  <Text w="50%">Thanh toán khi nhận hàng</Text>
                  <Flex alignSelf="center">
                      <Center  flex={1}>
                          <Checkbox value="test"colorScheme="green" rounded="full"  accessibilityLabel="This is checkbox" defaultIsChecked />
                      </Center>
                  </Flex>
                </HStack>
                <HStack space={10}>
                  <Box w="15%">
                  <Image source={require("../../assets/MoMo.jpg")}
                    alt="logo"
                    size="sm"
                    h={8}  w={8}
                    resizeMode="stretch"
                    ml={4}
                  />
                  </Box>
               
                  <Text w="50%">Ví điện tử MoMo</Text>
                  <Flex alignSelf="center">
                      <Center  flex={1}>
                          <Checkbox value="test"colorScheme="green" rounded="full"  accessibilityLabel="This is checkbox" defaultIsChecked />
                      </Center>
                  </Flex>
                </HStack>
                <HStack space={10}>
                <Box w="15%">
                  <Image source={require("../../assets/banking.jpg")}
                    alt="logo"
                    size="sm"
                    h={8}  w={8}
                    resizeMode="stretch"
                    ml={4}
                  />
                  </Box>
                  <Text w="50%">Ngân hàng điện tử</Text>
                  <Flex alignSelf="center">
                      <Center  flex={1}>
                          <Checkbox value="test"colorScheme="green" rounded="full"  accessibilityLabel="This is checkbox" defaultIsChecked />
                      </Center>
                  </Flex>
                </HStack>
              </VStack>
            </Box>
          </VStack>
        </ScrollView>

        {/* dat hang */}
        <HStack  bg={Colors.white} borderColor={Colors.gray} borderWidth={1} shadow={1} pb={4}>
                <Center>
                <Text bold italic fontSize={15} p={4} pt={8} pb={8}>Tổng thanh toán: <Text color={Colors.red}>1234500 đ</Text></Text>
                </Center>
                
                <Center>
                  <Button 
                      bg={Colors.red} 
                      color={Colors.white}  
                      rounded={0} ml={4} 
                      leftIcon={<MaterialCommunityIcons name="cart-variant" size={24} color="white" />}
                      
                      onPress={handleOpenAlert}
                  >
                        Đặt hàng 
                  </Button>
                </Center>
        </HStack>
      </Box>
      <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Xác nhận thanh toán?</AlertDialog.Header>
        
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Hủy
              </Button>
              <Button colorScheme="danger" onPress={handleOrderProduct}>
                Đặt hàng
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Box>
  ) 
}

export default OrderProduct