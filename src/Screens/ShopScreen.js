
import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, ScrollView, Text, HStack, Pressable, Button, Image, VStack, Divider, Center } from 'native-base'
import Colors from '../Colors'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import {baseURL} from '../Url'
import axios from 'axios';
import moment from "moment";
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { getShopDetail } from '../Redux/Actions/shopActions';
import Rating from '../Components/Rating'
const ShopScreen = () => {

  const navigation = useNavigation()

  const dispatch = useDispatch()

  const userLogin = useSelector((state)=> state.userLogin)
  const {userInfo} = userLogin;

  
  useEffect(()=> {
    dispatch(getShopDetail(userInfo.idUser))
},[dispatch, userInfo.idUser])


const shopDetail = useSelector((state)=> state.shopDetail)
const {shopInfo} = shopDetail;
console.log(shopInfo)

//get sp của shop
const [productShop, setProductShop] = useState([])

  const fetchProductShop = async () => {
    const {data} = await axios.get(`${baseURL}product/get-product-idShop/${shopInfo._id}/1`);
    setProductShop(data);
  };
  fetchProductShop();
console.log(productShop)


  return (
    <Box w="full">
      <Flex bg={Colors.white}  pt={5} pb={5} p={5} >
            <HStack>
            <AntDesign name="leftcircleo" size={24} color={Colors.red} onPress={() => navigation.navigate("Profile")} />
            <Text fontSize={18} color={Colors.black} ml={5}>Shop của tôi</Text>
            </HStack>
    </Flex>
    <HStack  bg={Colors.main} py={4} px={2}>
        <Pressable  onPress={() => navigation.navigate("EditProfile", userInfo)}>
        <Image 
           source={{uri: shopInfo.imgShop ? `${baseURL}images/shops/`+ shopInfo.imgShop : "https://tse3.mm.bing.net/th?id=OIP.-iHHGNEt70z4UO6e_TdcfQHaIs&pid=Api" }} 
          alt="profile"
          size="sm"
          resizeMode="cover"
          rounded="full"
          ml={2}
        />
        </Pressable>
       
      <VStack>
        <Heading
        bold 
        fontSize={16} 
        isTruncated
        
        color="#fff"
        ml={3}
        top={0}
        onPress={() => navigation.navigate("EditProfile", userInfo)}
        >
         {shopInfo.nameShop}
        </Heading>

       
        <HStack 
            mt={1}
            mb={1}
            ml={3}
            rounded={50} 
            bg="#D3D3D3"
            w="100%"
            pl={2}
            h={4}
            alignItems="center"
          >
             
             <Text italic fontSize={10} color={Colors.black} bold>Tham gia {moment(userInfo.createAt).format("LL")}</Text>
           
          </HStack>

       
        <HStack>
        <Text ml={3} fontSize={13} color="#fff">{shopInfo.followers} Người theo dõi</Text> 
        </HStack>
      </VStack>
      <Center>
      <Button variant="outline" ml={10} size="xs" borderColor={Colors.red} colorScheme="secondary" 
      > Xem Shop</Button>
      </Center>
     
      

      </HStack>

      <Pressable  p={4}  bg={Colors.white}>
        <Box>
          
          <HStack >
            <Ionicons name="receipt-outline" size={24} color={Colors.blue}  />
            
            <Text pl={2} fontSize={16} color="coolGray.800">
              Đơn Hàng
            </Text>
            
           
          </HStack>
          <Flex alignItems="flex-end" mr="1">
            <Text pl={2} zIndex={1} mt={-6}  fontSize={14} color="coolGray.400" onPress={() => navigation.navigate("Tab")}>
              Quản lý đơn hàng 
              <Entypo name="chevron-thin-right" size={14} color="coolGray.400" />
              
            </Text>
          </Flex>
          <Divider mt={3} mb={3} bg="coolGray.100"/>

          <HStack space={6} justifyContent="center">
            <VStack space={4}>
            <Center>
            <MaterialIcons name="approval" size={24} color="black" />
              </Center>
            <Text fontSize={12} color="coolGray.500">
              Chờ xác nhận
            </Text>
            
            </VStack>
            <VStack space={4}>
              <Center>
              <Ionicons name="car" size={23} color="black" />
              </Center>
            
              <Text fontSize={12} color="coolGray.500">
              Chờ lấy hàng
            </Text>
            </VStack>
            <VStack space={4}>
            <Center>
            <MaterialIcons name="local-shipping" size={24} color="black" />
              </Center>
              <Text fontSize={12} color="coolGray.500">
              Đang giao
            </Text>
            </VStack>
            <VStack space={4}>
            <Center>
            <Fontisto name="smiley" size={24} color="black" />
              </Center>
              <Text fontSize={12} color="coolGray.500">
              Đã giao
            </Text>
            </VStack>
            
           </HStack>
        </Box>
        
      </Pressable>
      <Divider mt={1} bg="coolGray.100"/>
      <Pressable  p={4}  bg={Colors.white}>
        <Box>
          
          <HStack >
           
            
            <Text pl={2} fontSize={16} bold color="coolGray.800">
              Sản phẩm của Shop
            </Text>
            
           
          </HStack>
          <Flex alignItems="flex-end" mr="1">
            <Text pl={2} zIndex={1} mt={-6}  fontSize={14} color="coolGray.400" onPress={() => navigation.navigate("Tab")}>
              Quản lý
              <Entypo name="chevron-thin-right" size={14} color="coolGray.400" />
              
            </Text>
          </Flex>
          <Divider mt={3} bg="coolGray.100"/>

          
        </Box>
        
      </Pressable>
 
           
  
  
      
      <ScrollView>
        <Flex
        direction="row"
        flexWrap="wrap"
        px={2}
        mb={400}
        >

        
     
      {
                productShop.map((product, index) =>(
                    <Pressable 
                        key={index} 
                        w="47%"
                        bg="#fff"
                        rounded="md"
                        shadow={1}
                        pt={0.3}
                        my={2}
                        margin={1}
                        pb={2}
                        overflow="hidden"
                        onPress={() => navigation.navigate("SingleProductScreen", product)}
                       
                    >
                        <Image
                            source={{uri: `${baseURL}images/products/` + product.imageProduct}}
                            alt={product.nameProduct}
                            w="full"
                            h="140"
                            resizeMode="stretch"
                        />
                        <Box px={1}>
                            <Text textAlign="center" bold  mt={1}>
                                {product.nameProduct} 
                            </Text>
                            <Heading size="xs" bold color={Colors.red} pl={2} pt={2}>
                                Giá: {product.price} đ
                            </Heading>
                            <Text fontSize={10} w="full">{product.name}</Text>
                            <Box ml={2}>
                            <Rating value={product.rating}/>
                            </Box>
                            
                        </Box>
                    </Pressable>
                    
                ))
            }
   </Flex>
      </ScrollView>
          
      
    </Box>
  )
}

export default ShopScreen