import { Badge, Box, Center, Divider, Flex, Heading, HStack, Image, Pressable, Text, VStack, ScrollView, Button } from 'native-base'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {baseURL} from '../Url'
import moment from "moment";
import Colors from '../Colors'
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getUserDetail } from '../Redux/Actions/userActions';
import {getOrderDetail} from '../Redux/Actions/orderActions';


function ProfileScreen() {

  const navigation = useNavigation()

  const dispatch = useDispatch()

  const userLogin = useSelector((state)=> state.userLogin)
  const {userInfo} = userLogin;

  
  useEffect(()=> {
    dispatch(getUserDetail(userInfo.idUser));
    dispatch(getOrderDetail(userInfo.idUser));
  },[dispatch, userInfo.idUser]);

  const cart = useSelector((state)=> state.cart)
  const {cartItems} = cart;

  const orderDetail = useSelector((state)=> state.orderDetail)
  const {order} = orderDetail;

  const [waiting, setWaiting] = useState(0);
  const [approved, setApproved] = useState(0);
  const [delivering, setDelivering] = useState(0);
  const [delivered, setDelivered] = useState(0);

  useEffect(()=> {
      if(order){
        
        let a = 0;
        let b = 0;
        let c = 0;
        let d = 0;

        for(let i = 0; i< order.length; i++) {
          
          if(order[i].status == 1) {
            a+=1;
          }
          else if(order[i].status == 2) {
            b+= 1;
          }
          else if(order[i].status == 3) {
            c+=1;
          }
          else{
            d+=1;
          }
        }
        setWaiting(a)
        setApproved(b)
        setDelivering(c)
        setDelivered(d)
      }
     
},[order])
  
    
  return (
    <>
    <ScrollView showsHorizontalScrollIndicator={false}>
    <Flex bg={Colors.main} pt={3} pb={4} p={4} >
   
    <Flex alignItems="flex-end" mr="1" >
      <HStack pb={4} >
        <VStack pr={2} pt={3}>
          <Ionicons  name="settings-outline" size={25} color={Colors.white} alignSelf="flex-end"/>
        </VStack>
        
        <VStack pr={4} pl={3} onPress={() => navigation.navigate("Cart")} >
          <Badge onPress={() => navigation.navigate("Cart")} colorScheme="error"  rounded="full" zIndex={1} mb={-3} mr={-4} variant="solid" alignSelf="flex-end" borderColor={Colors.white}>
            {cartItems.length}
          </Badge>
          <AntDesign name="shoppingcart" size={26} color={Colors.white} onPress={() => navigation.navigate("Cart")}/>
        </VStack>
        <VStack pl={3} >
           <Badge colorScheme="error"  rounded="full" zIndex={1} mb={-3} mr={-4} variant="solid" alignSelf="flex-end" borderColor={Colors.white}>
            2
          </Badge>
          <AntDesign name="message1" size={24} color={Colors.white} />
        </VStack>
      
       
        
      </HStack>
    </Flex>
        
      <HStack >
        <Pressable  onPress={() => navigation.navigate("EditProfile", userInfo)}>
        <Image source={{uri: `${baseURL}images/users/` + userInfo.avatar}} alt="profile"
          size="sm"
          resizeMode="cover"
         
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
          {userInfo.username}
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
        <Text ml={3} fontSize={13} color="#fff">Người theo <Text bold>0</Text> | </Text>
        <Text fontSize={13} color="#fff">Đang theo dõi <Text bold>20</Text></Text>
        </HStack>
      </VStack>
      

      </HStack>

    </Flex>

    <Flex bg={Colors.gray} pt={2}  pb={4} h="full" >
    <Pressable  p={4} overflow="hidden"  bg={Colors.white}>
        <Box>
          
          <HStack >
            <Ionicons name="receipt-outline" size={24} color={Colors.blue}  />
            
            <Text pl={2} fontSize={16} color="coolGray.800">
              Đơn Mua
            </Text>
            
           
          </HStack>
          <Flex alignItems="flex-end" mr="1">
            <Text pl={2} zIndex={1} mt={-6}  fontSize={14} color="coolGray.400" onPress={() => navigation.navigate("ManageOrder")}>
              Xem lịch sử mua hàng 
              <Entypo name="chevron-thin-right" size={14} color="coolGray.400" />
              
            </Text>
          </Flex>
          <Divider mt={3} mb={3} bg="coolGray.100"/>

          <HStack space={6} justifyContent="center">
            <VStack space={4}>
                <Badge colorScheme="error"  rounded="full" zIndex={1} mb={-7} mr={2} variant="solid" alignSelf="flex-end" borderColor={Colors.white}>
                    {waiting}
                </Badge>
                <Center>
                    <MaterialIcons name="approval" size={24} color="black" />
                </Center>
                <Text fontSize={12} color="coolGray.500">
                  Chờ xác nhận
                </Text>
            
            </VStack>
            <VStack space={4}>
                <Badge colorScheme="error"  rounded="full" zIndex={1} mb={-7} mr={2} variant="solid" alignSelf="flex-end" borderColor={Colors.white}>
                    {approved}
                </Badge>
                <Center>
                    <Ionicons name="car" size={23} color="black" />
                </Center>
            
                <Text fontSize={12} color="coolGray.500">
                Chờ lấy hàng
                </Text>
            </VStack>
            <VStack space={4}>
                <Badge colorScheme="error"  rounded="full" zIndex={1} mb={-7}  variant="solid" alignSelf="flex-end" borderColor={Colors.white}>
                    {delivering}
                </Badge>
                <Center>
                    <MaterialIcons name="local-shipping" size={24} color="black" />
                  </Center>
              <Text fontSize={12} color="coolGray.500">
              Đang giao
            </Text>
            </VStack>
            <VStack space={4}>
                <Badge colorScheme="error"  rounded="full" zIndex={1} mb={-7} mr={-2} variant="solid" alignSelf="flex-end" borderColor={Colors.white}>
                    {delivered}
                </Badge>
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

        
      <Pressable mt={2} p={4} overflow="hidden"  bg={Colors.white}>
        <Box>
        <HStack >
             <Entypo name="shop" size={22} color={Colors.green} />
            
            
            <Text pl={2} fontSize={16} color="coolGray.800" onPress={() => navigation.navigate("Shop", userInfo)}>
              Quản lý shop
            </Text>
            
           
          </HStack>
          <Flex alignItems="flex-end" mr="1">
            <Text pl={2} zIndex={1} mt={-6}  fontSize={14} color="coolGray.400">
             
              <Entypo name="chevron-thin-right" size={14} color="coolGray.400" />
              
            </Text>
          </Flex>
          <Divider mt={3} mb={3} bg="coolGray.100"/>
          
          <HStack >
            <AntDesign name="user" size={22} color={Colors.blue} />
            
            <Text pl={2} fontSize={16} color="coolGray.800" onPress={() => navigation.navigate("EditProfile", userInfo)}>
              Tài khoản của tôi
            </Text>
            
           
          </HStack>
          <Flex alignItems="flex-end" mr="1">
            <Text pl={2} zIndex={1} mt={-6}  fontSize={14} color="coolGray.400">
             
              <Entypo name="chevron-thin-right" size={14} color="coolGray.400" />
              
            </Text>
          </Flex>
          <Divider mt={3} mb={3} bg="coolGray.100"/>

          <HStack >
          <Feather name="map-pin" size={22} color={Colors.red} />
            
            <Text pl={2} fontSize={16} color="coolGray.800" onPress={() => navigation.navigate("Shipping")}>
              Địa chỉ
            </Text>
            
           
          </HStack>
          <Flex alignItems="flex-end" mr="1">
            <Text pl={2} zIndex={1} mt={-6}  fontSize={14} color="coolGray.400">
            
              <Entypo name="chevron-thin-right" size={14} color="coolGray.400" />
              
            </Text>
          </Flex>
          <Divider mt={3} mb={3} bg="coolGray.100"/>
          <HStack >
          <MaterialIcons name="payment" size={22} color={Colors.green} />
            
            <Text pl={2} fontSize={16} color="coolGray.800" onPress={()=> navigation.navigate("Payment")}>
              Phương thức thanh toán
            </Text>
            
           
          </HStack>
          <Flex alignItems="flex-end" mr="1">
            <Text pl={2} zIndex={1} mt={-6}  fontSize={14} color="coolGray.400">
            
              <Entypo name="chevron-thin-right" size={14} color="coolGray.400" />
              
            </Text>
          </Flex>
          <Divider mt={3} mb={3} bg="coolGray.100"/>
          <HStack >
          <Ionicons name="notifications-outline" size={24} color={Colors.main} />
            
            <Text pl={2} fontSize={16} color="coolGray.800">
              Thông báo
            </Text>
            
           
          </HStack>
          <Flex alignItems="flex-end" mr="1">
            <Text pl={2} zIndex={1} mt={-6}  fontSize={14} color="coolGray.400">
              
              <Entypo name="chevron-thin-right" size={14} color="coolGray.400" />
              
            </Text>
          </Flex>
          <Divider mt={3} mb={3} bg="coolGray.100"/>
          <HStack >
          <MaterialIcons name="language" size={24} color={Colors.red} />
          
            
            <Text pl={2} fontSize={16} color="coolGray.800">
              Cài đặt ngôn ngữ
            </Text>
            
           
          </HStack>
          <Flex alignItems="flex-end" mr="1">
            <Text pl={2} zIndex={1} mt={-6}  fontSize={14} color="coolGray.400">
              
              <Entypo name="chevron-thin-right" size={14} color="coolGray.400" />
              
            </Text>
          </Flex>
          <Divider mt={3} mb={3} bg="coolGray.100"/>
          <HStack >
          <Feather name="lock" size={22} color={Colors.blue} />
            
            <Text pl={2} fontSize={16} color="coolGray.800" onPress={()=> navigation.navigate("ResetPassword")}>
            Bảo mật tài khoản
            </Text>
            
           
          </HStack>
          <Flex alignItems="flex-end" mr="1">
            <Text pl={2} zIndex={1} mt={-6}  fontSize={14} color="coolGray.400">
              
              <Entypo name="chevron-thin-right" size={14} color="coolGray.400" />
              
            </Text>
          </Flex>
          <Divider mt={3} mb={3} bg="coolGray.100"/>
        </Box>
      </Pressable>

      <Center mt={4}>
        <Button variant="outline" _text={{color: Colors.black}} w="90%" onPress={()=> navigation.navigate("Login")}>Đăng xuất</Button>
      </Center>
      
    </Flex>
    {/* <Tabs/> */}
    </ScrollView>
    </>
  ) 
}

export default ProfileScreen