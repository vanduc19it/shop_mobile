import { Box, Button, Heading, Image, Input, Pressable, Text, View, VStack } from 'native-base'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';

function LoginScreen() {
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
              <MaterialIcons name="email" size={24} color="black" />
            }
            variant="underlined" 
            placeholder='user@gmail.com' 
            w="70%" 
            color="white"
            borderBottomColor="black"
            pl={2} 
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
          />
        </VStack> 
        <Button 
        _pressed={{
          bg: "#1cef58"
        }}
        _text={{
          color: "#fff"
        }}
        my={30} w="40" rounded={50} bg="#f7dd18">LOGIN</Button>
        <Pressable mt={4}>
          <Text color="#1cef58">
            SIGN UP
          </Text>
        </Pressable>
     </Box>
   </Box>
   
  )
}

export default LoginScreen