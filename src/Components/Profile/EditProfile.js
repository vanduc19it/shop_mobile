
import React, {useState, useEffect, useRef} from 'react'
import { Badge, Box, Button, Center, Flex, FormControl, Heading, HStack, Image, Input, ScrollView, Text, VStack,Select ,CheckIcon,useToast, Alert, AlertDialog} from 'native-base'
import Buttone from '../../Components/Buttone'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../../Colors';
import {baseURL} from '../../Url'
import { useDispatch, useSelector } from "react-redux";;
import { EvilIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { getUserDetail, updateUserProfile } from '../../Redux/Actions/userActions';


export default function EditProfile() {
  const navigation = useNavigation()
  const dispatch = useDispatch();

  const userLogin = useSelector((state)=> state.userLogin)
  const {userInfo} = userLogin;

  
  const userDetail = useSelector((state) => state.userDetail);
  const {user} = userDetail;
    
const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [address, setAddress] = useState("");
const [gender, setGender] = useState("");
  
  const handleOpenAlert = () => {
    if(name != "" && email != "" && address != "" && gender != ""){
      setIsOpen(true)
    }
  }
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef(null);

  const onClose = () => {setIsOpen(false);}

  const handleUpdate = ()=> {
     dispatch(updateUserProfile(userInfo.idUser, name, email, address, gender ))
    setIsOpen(false);
    toast.show({
      render: () => {
        return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                Cập nhật thành công
              </Box>;
      },
      duration: 2000,
    })
  }
  const toast = useToast()

  return (
    
    <Box w="full">
        <Flex bg={Colors.white}  pt={5} pb={5} p={5} >
            <HStack>
            <AntDesign name="leftcircleo" size={24} color={Colors.red} onPress={() => navigation.navigate("Profile")} />
            <Text fontSize={18} color={Colors.black} ml={5}>Sửa hồ sơ</Text>
            </HStack>
        </Flex>
        <Flex bg={Colors.main}  pt={0} pb={5} p={5} >
            <Center>
            <VStack  mt={20} mb={5}>
           <Badge colorScheme="info"  rounded="full" zIndex={1} mb={-20} mr={-4}  h="10" w="10" alignSelf="flex-end" borderColor={Colors.white}>
           <EvilIcons name="camera" size={22} color="black" />
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
           
                <FormControl>
                    <FormControl.Label 
                    _text={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "black",
                    }}
                    >
                    Tên người dùng
                    </FormControl.Label>
                    <Input 
                    borderWidth={0.2} 
                    bg={Colors.white} 
                    borderColor={Colors.white}
                    py={2} 
                    type="text"
                    color={Colors.black} 
                    fontSize={14}
                    placeholder={user.result.username}
                    _focus={{
                        bg: Colors.white,
                        borderColor: Colors.white,
                       
                    }}
                    value={name}
                    onChangeText={(e) => setName(e)}
                    />
                     <FormControl.Label 
                    _text={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "black",
                    }}
                    >
                    Email
                    </FormControl.Label>
                    <Input 
                    borderWidth={0.2} 
                    bg={Colors.white} 
                    borderColor={Colors.white}
                    py={2} 
                    type="text"
                    color={Colors.black} 
                    fontSize={14}
                    placeholder={user.result.email}
                    _focus={{
                        bg: Colors.white,
                        borderColor: Colors.white,
                       
                    }}
                    value={email}
                    onChangeText={(e) => setEmail(e)}
                    />
                     <FormControl.Label 
                    _text={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "black",
                    }}
                    >
                    Địa chỉ
                    </FormControl.Label>
                    <Input 
                    borderWidth={0.2} 
                    bg={Colors.white} 
                    borderColor={Colors.white}
                    py={2} 
                    type="text"
                    color={Colors.black} 
                    fontSize={14}
                    placeholder={`${user.result.address}`}
                    _focus={{
                        bg: Colors.white,
                        borderColor: Colors.white,
                       
                    }}
                    value={address}
                    onChangeText={(e) => setAddress(e)}
                    />
                    <FormControl.Label 
                    _text={{
                        fontSize: "13px",
                        fontWeight: "bold",
                        color: "black",
                    }}
                    >
                    Giới tính
                    </FormControl.Label>
            
              <Select bg={Colors.white}
                      fontSize={14}
                      selectedValue={gender} 
                      borderColor={Colors.white}
                      minWidth="200" 
                      accessibilityLabel="Chọn giới tính" 
                      placeholder="Chọn giới tính" 
                      _selectedItem={{
                        bg: "teal.600",
                        endIcon: <CheckIcon size="4" />
                      }}
                      mt={1} 
                      onValueChange={e => setGender(e)}>
                        <Select.Item label="Nam" value="male" />
                        <Select.Item label="Nữ" value="female" />
              </Select>

                </FormControl>
              
            <Center mt={4}>
                <Button 
                  variant="outline" 
                  borderColor= {Colors.black} 
                  _text={{color: Colors.black, fontWeight:"bold"}} 
                  w="100%"
                  onPress={handleOpenAlert}
                >Cập Nhật</Button>
            </Center>
            </VStack>
        </ScrollView>
        </Box>
        <AlertDialog leastDestructiveRef={cancelRef} isOpen={isOpen} onClose={onClose}>
        <AlertDialog.Content>
          <AlertDialog.CloseButton />
          <AlertDialog.Header>Bạn muốn cập nhật không?</AlertDialog.Header>
        
          <AlertDialog.Footer>
            <Button.Group space={2}>
              <Button variant="unstyled" colorScheme="coolGray" onPress={onClose} ref={cancelRef}>
                Hủy
              </Button>
              <Button colorScheme="danger" onPress={handleUpdate}>
                Cập nhật
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Box>
  )
}