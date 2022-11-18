import { Box, Button, Heading, Image, Input, Pressable, Text, View, VStack, FormControl } from 'native-base'
import React, {useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { register } from '../Redux/Actions/userActions';

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

  return (
    <Box flex={1} bg="black">
    <Image 
       flex={1} 
       alt="logo"
       resizeMode="cover"
       size="lg"
       w="full"
       source={require('../../assets/backgroundlogin.jpg')}
       />
     <Box 
       w="full"
       h="full"
       position="absolute"
       top="0"
       px="6"
       justifyContent="center"
       >
       <Heading>SIGN UP</Heading>
       <FormControl isRequired>
       <VStack space={8} pt="6">
         <Input
           InputLeftElement={
            <AntDesign name="user" size={24} color="black" />
           }
           variant="underlined" 
           placeholder='Van duc shopiiii' 
           w="70%" 
           color="white"
           borderBottomColor="black"
           pl={2}
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
             <MaterialIcons name="email" size={24} color="black" />
           }
           variant="underlined" 
           placeholder='user@gmail.com' 
           w="70%" 
           color="white"
           borderBottomColor="black"
           pl={2} 
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
             <Ionicons name="eye" size={24} color="black" />
           }
           variant="underlined" 
           placeholder='**********' 
           type="password"
           w="70%" 
           color="white"
           borderBottomColor="black"
           pl={2} 
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
             <Ionicons name="eye" size={24} color="black" />
           }
           variant="underlined" 
           placeholder='**********' 
           type="password"
           w="70%" 
           color="white"
           borderBottomColor="black"
           pl={2} 
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
            color: "#fff"
          }}
          my={30} w="40" 
          rounded={50} 
          bg="#f7dd18"
          onPress={handleRegister}
       >
          SIGN UP
       </Button>
       <Pressable mt={4} onPress={() => navigation.navigate("Login")}>
         <Text color="#1cef58">
           LOGIN
         </Text>
       </Pressable>
    </Box>
  </Box>
  ) 
}

export default RegisterScreen