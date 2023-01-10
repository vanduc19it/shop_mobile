
import React, { useEffect, useState } from 'react'
import { Box, Flex, Heading, ScrollView, Text, View, HStack, Pressable, Image, VStack } from 'native-base'
import Colors from '../Colors'
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import {baseURL} from '../Url'
import moment from "moment";
import axios from 'axios';
import { getShopDetail } from '../Redux/Actions/shopActions';
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

  return (
    <Box w="full">
      <Flex bg={Colors.white}  pt={5} pb={5} p={5} >
            <HStack>
            <AntDesign name="leftcircleo" size={24} color={Colors.red} onPress={() => navigation.navigate("Profile")} />
            <Text fontSize={18} color={Colors.black} ml={5}>Shop của tôi</Text>
            </HStack>
    </Flex>
    <HStack >
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
        fontSize={20} 
        isTruncated
        
        color="#fff"
        ml={3}
        top={0}
        onPress={() => navigation.navigate("EditProfile", userInfo)}
        >
         
        </Heading>

        <HStack 
            mt={1}
            mb={1}
            ml={3}
            rounded={50} 
            bg="#D3D3D3"
            w="57%"
            pl={2}
            h={4}
            alignItems="center"
          >
             <Text italic fontSize={10} color={Colors.black} bold>Tham gia {moment(userInfo.createAt).calendar()}</Text>
           
          </HStack>

       
        <HStack>
        <Text ml={3} fontSize={13} color="#fff"> Người theo dõi</Text> 
        </HStack>
      </VStack>
      

      </HStack>
    
    </Box>
  )
}

export default ShopScreen