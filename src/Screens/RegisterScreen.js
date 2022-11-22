import { Box, Button, Heading, Image, Input, Pressable, Text, View, VStack, FormControl,Center, Icon } from 'native-base'
import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { register } from '../Redux/Actions/userActions';
import Buttone from '../Components/Buttone'
import Colors from '../Colors'
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
function RegisterScreen({navigation}) {

  const dispatch = useDispatch();

  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")


  const [validateName, setValidateName] = useState(true)
  const [validateEmail, setValidateEmail] = useState(true)
  const [validatePassword, setValidatePassword] = useState(true)
  const [validateConfirmPassword, setValidateConfirmPassword] = useState(true)

  const handleRegister = () => {
 
    if(name === "") {
      setValidateName(false)
    }
    if(email === "" ) {
      setValidateEmail(false) 
    }
    if( password === "") {
      setValidatePassword(false)
    }
    if(confirmPassword === "") {
      setValidateConfirmPassword(false)
    }
    if (password === confirmPassword) {
      // dispatch(register(name, email, password))
      // navigation.navigate("Bottom")
    }
    
  }
  const [show, setShow] = React.useState(false);

  return (
    <Box flex={1} bg={Colors.white}>
  
     <Box 
       w="full"
       h="95%"
       position="absolute"
       top="0"
       px="6"
       justifyContent="center"
       mt={4}
       >
        <Center>
        <Heading mb={2}>SIGN UP</Heading>
        </Center>

        
        <Image 
          alt="logo"
          resizeMode="contain"
          size="xl"
          w="full"
          mb={2}
          source={require('../../assets/Sign_up.gif')}
        />
      
       <FormControl isRequired>
       <VStack space={2} pt="6">
         <Input
           InputLeftElement={
            <Icon as={
            <AntDesign name="user" size={24} color="black" />}
            color={Colors.black}
            ml="4" 
            size={5}
            />
           }
           variant="underlined" 
           placeholder='Van duc shopiiii' 
           w="100%" 
           p={3}
           color={Colors.black}
           rounded={50}
           borderBottomColor={Colors.white}
           pl={2}
           bg={Colors.submain}
           value={name}
           onChangeText={(e) => setName(e)}
           
         />
          {
           !validateName ? <FormControl.HelperText>
           Nhập tên của bạn
           </FormControl.HelperText> : ''
         }
        
           
          <Input
           InputLeftElement={
            <Icon as={
              <MaterialCommunityIcons name="email-outline" />
            }
            color={Colors.black}
            ml="4" 
            size={5}
            />
           }
           variant="underlined" 
           placeholder='user@gmail.com' 
           w="100%" 
           p={3}
           rounded={50}
           color={Colors.black}
           borderBottomColor={Colors.white}
           pl={2} 
           bg={Colors.submain}
           value={email}
           onChangeText={(e) => setEmail(e)}
         />
        {
           !validateEmail ? <FormControl.HelperText>
           Nhập email của bạn
           </FormControl.HelperText> : ''
         }
         <Input
           InputLeftElement={
            <Icon as={
              <AntDesign name="lock1"  />
            }
            color={Colors.black}
            ml="4" 
            size={5}
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
           color={Colors.black}
           variant="underlined" 
           placeholder='**********' 
           type={show ? "text" : "password"}
           p={3}
           w="100%" 
           rounded={50}
           borderBottomColor={Colors.white}
           pl={2} 
           bg={Colors.submain}
           value={password}
           onChangeText={(e) => setPassword(e)}
         />
        {
           !validatePassword ? <FormControl.HelperText>
           Nhập password của bạn
           </FormControl.HelperText> : ''
         }
          <Input
           InputLeftElement={
            <Icon as={
              <AntDesign name="lock1"  />
            }
            color={Colors.black}
            ml="4" 
            size={5}
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
           variant="underlined" 
           placeholder='**********' 
           type={show ? "text" : "password"}
           w="100%" 
           p={3}
           rounded={50}
           color={Colors.black}
           borderBottomColor={Colors.white}
           pl={2} 
           bg={Colors.submain}
           value={confirmPassword}
           onChangeText={(e) => setConfirmPassword(e)}
         />
       {
           !validateConfirmPassword ? <FormControl.HelperText>
            Xác nhận mật khẩu
           </FormControl.HelperText> : ''
         }
       </VStack> 
       </FormControl>
       <Button 
          _pressed={{
            bg: "#1cef58"
          }}
          _text={{
            color: Colors.black,
            fontWeight: "bold"
          }}
          my={30} w="100%" 
          rounded={50} 
          p={4}
          bg={Colors.main}
          onPress={handleRegister}
       >
          SIGN UP
       </Button>
       <Pressable mt={2} onPress={() => navigation.navigate("Login")}>
       <Center>
            <Text color={Colors.lightblue} italic >
              Login to Account
            </Text>
          </Center>
       </Pressable>
    </Box>
  </Box>
  ) 
}

export default RegisterScreen