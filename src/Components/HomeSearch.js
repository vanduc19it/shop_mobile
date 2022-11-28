import { HStack, Input, Pressable, Text, Box, Icon } from 'native-base'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Colors from '../Colors'
import { EvilIcons } from '@expo/vector-icons';

export default function HomeSearch() {
    const navigation = useNavigation()
  return (
    <HStack 
        space={3} 
        w="full" 
        px={6} 
        bg={Colors.main} 
        py={4} 
        alignItems="center"
        safeAreaTop
    >
        <Input placeholder="Tìm kiếm sản phẩm"
            w="85%"
            bg={Colors.white}
            type="search"
            variant="filled"
            h={12}
            fontSize={14}
            borderWidth={0}
            _focus={{
                bg: Colors.white
            }}
            InputLeftElement={<Icon as={<EvilIcons name="search"  />} size={7} ml="2" color={Colors.black} />}
        />
        <Pressable ml={3} onPress={() => navigation.navigate("Cart")}>
            <FontAwesome name="shopping-bag" size={24} color="black" />
            <Box px={1} rounded="full" position="absolute" top={-13} left={2} bg="#ed1c5e" 
            _text={{
                color: "#fff",
                fontSize:"11px" 
                 }}
            >
                5   
            </Box>
        </Pressable>
    </HStack>
  )
}
