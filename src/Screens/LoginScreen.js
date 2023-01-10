import { Box, Button, Heading, Image, Input, Pressable, Text, Icon, FormControl, VStack, Center, Flex ,HStack, useToast} from 'native-base'
import React, {useState} from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { getUserDetail, login } from '../Redux/Actions/userActions';
import Colors from '../Colors'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function LoginScreen({navigation}) {

const dispatch = useDispatch();

const [email, setEmail] = useState("")
const [password, setPassword] = useState("") 

const userLogin = useSelector((state) => state.userLogin);
const {userInfo, error} = userLogin;

const handleLogin = () => {
  if(email === "" ) {
    setValidateEmail(true) 
  }
  if( password === "") {
    setValidatePassword(true)
  }

  dispatch(login(email, password))
 
  if(error || email === "" || password === "") {
    //dang nhap nhat bai
    toast.show({
      render: () => {
        return <Box bg="emerald.500" px="2" py="2" rounded="sm" mb={5}>
                Đăng nhập thất bại!
              </Box>;
      },
      duration: 1000,
    })
    
  } else {
    navigation.navigate("Bottom")
    //toast dang nhap thanh cong
    toast.show({
      render: () => {
        return <Box bg="emerald.500" px="2" py="2" rounded="sm" mb={5}>
                Đăng nhập thành công!
              </Box>;
      },
      duration: 1000,
    })
    
  }
  
  
}
const toast = useToast()

const [validateEmail, setValidateEmail] = useState(false)
const [validatePassword, setValidatePassword] = useState(false)

const [show, setShow] = React.useState(false);
  return (
   <Box flex={1} bg={Colors.white}>
      <Box 
        w="full"
        h="100%"
        position="absolute"
        top="0"
        px="6"
        justifyContent="center"
        >
          <Center>
            <Heading mb={8}>LOGIN</Heading>
          </Center>
       
        <Image 
          alt="logo"
          resizeMode="contain"
          size="xl"
          w="full"
          source={require('../../assets/giflogin.gif')}
        />
        <FormControl isRequired>
        <VStack space={4} pt="10" pb={5}>
          <Input
            InputLeftElement={
              <Icon as={
                <MaterialCommunityIcons name="email-outline" />
                }
                ml="4" 
                color={Colors.black} 
                size={6}
              />
            }
                
            variant="underlined" 
            placeholder='Nhập email của bạn' 
            w="100%" 
            p={4}
            color={Colors.black}
            placeholderTextColor="blue"
            rounded={50}
            pl={2} 
            value={email}
            onChangeText={(e) => setEmail(e)}
            bg={Colors.blue2}
            borderBottomColor={Colors.white}
          />
           {
           validateEmail ? <FormControl.HelperText>
           Nhập email của bạn
           </FormControl.HelperText> : ''
         }
          {/* input password */}
          <Input
            InputLeftElement={
              <Icon as={
                <AntDesign name="lock1"  />
              }
              color={Colors.black}
              ml="4" 
              size={6}
              />
            }
            InputRightElement={
            <Pressable onPress={() => setShow(!show)}>
              <Icon as={
                <Ionicons name={show ? "md-eye-outline": "md-eye-off-outline"} />
                } 
              size={6} 
              mr="4" 
              color={Colors.black}
              />
            </Pressable>}

            p={4}
            variant="underlined" 
            placeholder='**********' 
            type={show ? "text" : "password"}
            w="100%" 
            color={Colors.black}
            rounded={50}
            pl={2} 
            borderBottomColor={Colors.white}
            bg={Colors.blue2}
            value={password}
            onChangeText={(e) => setPassword(e)}
            
          />
          {
           validatePassword ? <FormControl.HelperText>
           Nhập password của bạn
           </FormControl.HelperText> : ''
         }
        
          <Flex alignItems="flex-end" mr="1">
             <Text italic color={Colors.orange}>Forgot Password</Text>
          </Flex>
         
        </VStack> 
        </FormControl>
        <Button
           _pressed={{
            bg: "#1cef58"
          }}
          _text={{
            color: Colors.white,
            fontWeight: "bold"
          }}
          w="100%" 
          rounded={50} 
          p={4}
          bg={Colors.main}
          onPress={handleLogin}
        >
          LOGIN
        </Button>
        <Center >
          <Text color={Colors.lightblue} italic mt={2}>__________ OR ___________</Text>
        </Center>
        {/* fb and gg */}
        <Center mt={5} mb={0}>
          <HStack space={3}>
            <Button w="50" h="50" rounded="full" bg={Colors.submain}>
              <Image 
                alt="fb"
                resizeMode="contain"
                source={require('../../assets/gg.png')}
              />
            </Button>
            <Button w="50" h="50" rounded="full" bg={Colors.submain}>
              <Image 
                alt="fb"
                resizeMode="contain"
                source={require('../../assets/fb.png')}
              />
            </Button>
          </HStack>
        </Center>
       
        
        <Pressable mt={8} onPress={() => navigation.navigate("Register")}>
          <Center>
            <Text color={Colors.lightblue} italic >
              Create An Account
            </Text>
          </Center>
        </Pressable>
     </Box>
   </Box>
   
  )
}

export default LoginScreen