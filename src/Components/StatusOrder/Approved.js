import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getOrderDetail } from '../../Redux/Actions/orderActions'
import Colors from '../../Colors'
import { useNavigation } from '@react-navigation/native'
import { Box, Center, Divider, Flex, HStack, Image, Text, ScrollView, VStack } from 'native-base'
import { AntDesign } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import moment from "moment";
import { baseURL } from '../../Url'
import { getShopDetail } from '../../Redux/Actions/shopActions';

const Approved = () => {

  const navigation = useNavigation()
  const dispatch = useDispatch()

  const userLogin = useSelector((state)=> state.userLogin)
  const {userInfo} = userLogin;

  useEffect(()=> {
      dispatch(getOrderDetail(userInfo.idUser));
      dispatch(getShopDetail(userInfo.idUser))
    },[dispatch, userInfo.idUser]);

  const orderDetail = useSelector((state)=> state.orderDetail)
  const {order} = orderDetail;

  const shopDetail = useSelector((state)=> state.shopDetail)
  const {shopInfo} = shopDetail;

  console.log(order)
    //tong price cho  tung item 
    var a = 0;
    const [b, setB] = useState(0)
  return (
    <ScrollView w="full" bg={Colors.submain}  showsVerticalScrollIndicator={false} >

{
           order.map((item) => item.status == 2 &&  (
              <Box bg={Colors.white} w="full" mb={8} px={5} key={item._id}>

                <VStack space={2} mt={5} w="100%" >      
              <HStack space={2} >
              <FontAwesome name="user-o" size={18} color="black" />
                <Text bold fontSize="15px" >Người nhận: <Text fontWeight="normal" color={Colors.lightblue}>{item.namedReceiver}</Text></Text>
                <Text bold fontSize="15px">(+84) 0{item.phoneReceiver}</Text>            
              </HStack>
              <HStack space={1}>
                    <EvilIcons name="location" size={24} color="black"  />
                    <Text color={Colors.black} fontSize="14px"bold >Địa chỉ: <Text fontWeight="normal" color={Colors.lightblue}>{item.addressReceiver}</Text></Text>
              </HStack>
              <HStack space={2}>
                    <MaterialIcons name="payment" size={20} color="black"  />
                    <Text color={Colors.black} fontSize="14px" bold>Phương thức thanh toán: <Text fontWeight="normal" color={Colors.lightblue}> {item.payment}</Text></Text>
              </HStack>
              
              <HStack space={3} bg={Colors.gray}>
                    <Text color={Colors.black} fontSize="14px" bold ml={1} mt={2}>Trạng thái: <Text fontWeight="normal" color={Colors.lightblue}>Đã xác nhận</Text></Text>
                    <Text color={Colors.darkgray} italic fontSize="14px" mb={4} mt={2}>{moment(item.createAt).format("LL")}</Text>
              </HStack>
             
            </VStack>
            <Divider bg="emerald.300" thickness="1" mt={4}/>
            <Text bold mt={2}>Sản phẩm</Text>
            <Divider bg="gray.200" thickness="1" mt={4}/>
           
            {
                
                item.productItems.map((product) => (
                    
                    <VStack key={product._id}>
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
                    <Divider bg="gray.100" thickness="1" mb={2}/>
                    <HStack space={5}>
                        
                        <Image 
                            source={{uri: `${baseURL}images/products/${product.imgProduct}`}}
                            alt="abc" 
                            h={100}  w={100}
                            resizeMode="stretch"
                            onPress={() => navigation.navigate("SingleProductScreen")}
                        />
                        <VStack space={2} w="60%"> 
                          <Text mt={1} bold>{product.nameProduct}</Text>
  
                        
                          <Text bold mt={2}>Giá: <Text color={Colors.red}>{product.unit_price} đ</Text></Text>
                          <Flex alignItems="flex-end" w="full">
                          <Text >x {product.quantity}</Text>
                          </Flex>
                        </VStack>
                      
                    </HStack>
                    <Divider bg="gray.100" thickness="1" mt={2}/>
                    {
                       useEffect(()=> {
                        
                        a += product.unit_price * product.quantity
                        setB(a)
                      },[product])


                       
                    }
                </VStack>
                   
                   
                ))
            }
           
            
              
                  <Flex alignItems="flex-end" pt={2} pb={2}>
                      <Text >{item.productItems.length} mặt hàng, tổng cộng: <Text bold color= {Colors.red}>{item.totalPrice} đ</Text> </Text>
                  </Flex>
          </Box>
            ))
          }




  
    </ScrollView>
  )
}

export default Approved