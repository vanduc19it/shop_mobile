import { Box, Button, Heading, Image, Input, Pressable, Text, View, VStack } from 'native-base'
import React, {useState} from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { useDispatch, useSelector } from "react-redux";
import { login } from '../Redux/Actions/userActions';





function LoginScreen({navigation}) {

  const dispatch = useDispatch();

  const [email, setEmail] = useState("")
const [password, setPassword] = useState("") 


const handleLogin = () => {
  dispatch(login(email, password))
  navigation.navigate("Bottom")
}

const userLogin = useSelector((state) => state.userLogin);
const { error, loading, userInfo} = userLogin;

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
        <Heading>LOGIN</Heading>
        <VStack space={8} pt="6">
          <Input
            InputLeftElement={
              <MaterialIcons name="email" size={24} color="black"  />
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
        </VStack> 
        <Button 
          _pressed={{
            bg: "#1cef58"
          }}
          _text={{
            color: "#fff"
          }}
          my={30} 
          w="40" 
          rounded={50} 
          bg="#f7dd18"
          onPress={handleLogin}
        >
          LOGIN
        </Button>
        <Pressable mt={4} onPress={() => navigation.navigate("Register")}>
          <Text color="#1cef58">
            SIGN UP
          </Text>
        </Pressable>
     </Box>
   </Box>
   
  )
}

export default LoginScreen