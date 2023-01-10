import { HStack, Text } from 'native-base'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'; 
import Colors from '../Colors'
function Rating({value=4, text}) {
    const size = 14
    const color= Colors.orange
  return (
    <HStack space={1} alignItems="center">
        <FontAwesome 
            bg={Colors.orange}
            name={value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"} 
            color={color} 
            size={size} 
        />
        <FontAwesome 
            name={value >= 2 ? "star" : value >= 1.5 ? "star-half-o" : "star-o"} 
            color={color} 
            size={size} 
        />
        <FontAwesome 
            name={value >= 3 ? "star" : value >= 2.5 ? "star-half-o" : "star-o"} 
            color={color} 
            size={size} 
        />
        <FontAwesome 
            name={value >= 4 ? "star" : value >= 3.5 ? "star-half-o" : "star-o"} 
            color={color} 
            size={size} 
        />
        <FontAwesome 
            name={value >= 5 ? "star" : value >= 4.5 ? "star-half-o" : "star-o"} 
            color={color} 
            size={size} 
        />
        {
            text && (
                <Text fontSize={12} ml={2}>
                    {text}
                </Text>
            )
        }
        
    </HStack>
  )
}

export default Rating