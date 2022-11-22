import { Badge, Box, Center, Divider, Flex, Heading, HStack, Image, Pressable, Text, View, VStack, ScrollView, Button } from 'native-base'
import React from 'react'
import Tabs from '../Components/Profile/Tabs'
import { useDispatch, useSelector } from "react-redux";
import {baseURL} from '../Url'
import moment from "moment";
import Colors from '../Colors'
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';


function ProfileScreen() {

  const navigation = useNavigation()

  const dispatch = useDispatch()

  const userLogin = useSelector((state)=> state.userLogin)
  const {userInfo} = userLogin;



  return (
    <>
    <ScrollView showsHorizontalScrollIndicator={false}>
    <Flex bg={Colors.main} pt={3} pb={4} p={4} >
   
    <Flex alignItems="flex-end" mr="1" >
      <HStack pb={4} >
        <VStack pr={5} pt={3}>
          <Ionicons  name="settings-outline" size={25} color={Colors.white} alignSelf="flex-end"/>
        </VStack>
        <VStack pr={6}>
          <Badge colorScheme="error"  rounded="full" zIndex={1} mb={-3} mr={-4} variant="solid" alignSelf="flex-end" borderColor={Colors.white}>
            10
          </Badge>
          <AntDesign name="shoppingcart" size={26} color={Colors.white} />
        </VStack>
        <VStack >
           <Badge colorScheme="error"  rounded="full" zIndex={1} mb={-3} mr={-4} variant="solid" alignSelf="flex-end" borderColor={Colors.white}>
            10
          </Badge>
          <AntDesign name="message1" size={24} color={Colors.white} />
        </VStack>
      
       
        
      </HStack>
    </Flex>
        
      <HStack>
        <Image source={{uri: `${baseURL}images/users/` + userInfo.avatar}} alt="profile"
          size="sm"
          resizeMode="cover"
        />
      <VStack>
        <Heading
        bold 
        fontSize={20} 
        isTruncated
        
        color="#fff"
        ml={3}
        top={0}
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
            <Text pl={2} zIndex={1} mt={-6}  fontSize={14} color="coolGray.400" onPress={() => navigation.navigate("Tab")}>
              Xem lịch sử mua hàng 
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

        
      <Pressable mt={2} p={4} overflow="hidden"  bg={Colors.white}>
        <Box>
        <HStack >
             <Entypo name="shop" size={22} color={Colors.green} />
            
            
            <Text pl={2} fontSize={16} color="coolGray.800">
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
            
            <Text pl={2} fontSize={16} color="coolGray.800">
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
            
            <Text pl={2} fontSize={16} color="coolGray.800">
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
            
            <Text pl={2} fontSize={16} color="coolGray.800">
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
        <Button variant="outline" _text={{color: Colors.black}} w="90%" >Đăng xuất</Button>
      </Center>
      
    </Flex>
    {/* <Tabs/> */}
    </ScrollView>
    </>
  ) 
}

export default ProfileScreen