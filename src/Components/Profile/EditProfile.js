
import React from 'react'
import { Badge, Box, Button, Center, Flex, FormControl, Heading, HStack, Image, Input, ScrollView, Text, VStack } from 'native-base'
import Buttone from '../../Components/Buttone'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Colors';
import {baseURL} from '../../Url'
import { useSelector } from 'react-redux';
import { EvilIcons } from '@expo/vector-icons';
const Inputs = [
  {
    label: "Tên người dùng", 
    type: "text",
  },
  {
    label: "Email", 
    type: "text",
  },
  {
    label: "Giới tính", 
    type: "text",
  },
  {
    label: "Địa chỉ", 
    type: "text",
  }
]

export default function EditProfile() {
    
  const userLogin = useSelector((state)=> state.userLogin)
  const {userInfo} = userLogin;
  return (
    <Box w="full">
        <Flex bg={Colors.white}  pt={5} pb={5} p={5} >
            <HStack>
            <AntDesign name="leftcircleo" size={24} color={Colors.main} />
            <Text fontSize={18} color={Colors.black} ml={5}>Sửa hồ sơ</Text>
            </HStack>
        </Flex>
        <Flex bg={Colors.main}  pt={5} pb={5} p={5} >
            <Center>
            <VStack  mt={20} mb={5}>
           <Badge colorScheme="info" variant="outline" rounded="full" zIndex={1} mb={-20} mr={-4}  alignSelf="flex-end" borderColor={Colors.white}>
           <EvilIcons name="camera" size={24} color="black" />
          </Badge>
          
          <Image source={{uri: `${baseURL}images/users/` + userInfo.avatar}} alt="profile"
          size="md"
          resizeMode="cover"
        />
         
        </VStack>
            </Center>
        </Flex>


        <Box h="full" bg={Colors.gray} px={5}>
        
        <ScrollView showsVerticalScrollIndicator={false}>
            <VStack space={2} mt={5} pb={10}>
            {
                Inputs.map((i, index) => (
                <FormControl key={index}>
                    <FormControl.Label 
                    _text={{
                        fontSize: "12px",
                        fontWeight: "bold",
                        color: "black",
                    }}
                    >
                    {i.label}
                    </FormControl.Label>
                    <Input 
                    borderWidth={0.2} 
                    bg={Colors.white} 
                    borderColor="#ccc"
                    py={2} 
                    type={i.type}
                    color={Colors.black} 
                    fontSize={15}
                    _focus={{
                        bg: Colors.white,
                        borderColor: Colors.white,
                       
                    }}
                    />
                </FormControl>
                ))  
            }
            <Center mt={4}>
                <Button variant="outline" borderColor= {Colors.black} _text={{color: Colors.black, fontWeight:"bold"}} w="100%" >Cập Nhật</Button>
            </Center>
            </VStack>
        </ScrollView>
        </Box>
    </Box>
  )
}