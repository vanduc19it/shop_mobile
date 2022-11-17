import { HStack, Input, Pressable, Text, Box } from 'native-base'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HomeSearch() {
    const navigation = useNavigation()
  return (
    <HStack 
        space={3} 
        w="full" 
        px={6} 
        bg="#66aff6" 
        py={4} 
        alignItems="center"
        safeAreaTop
    >
        <Input placeholder="ao, quan,..."
            w="85%"
            bg="#fff"
            type="search"
            variant="filled"
            h={12}
            borderWidth={0}
            _focus={{
                bg: "#fff"
            }}
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
