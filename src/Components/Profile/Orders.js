import React from 'react'
import { Box, Button, HStack, Pressable, ScrollView, Text } from 'native-base'

export default function Orders() {
  return (
    <Box h="full" bg="#66aff6" pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* da tra */}
        <Pressable>
          <HStack
            space={4} 
            justifyContent="space-between"
            alignItems="center"
            bg="#fff"
            py={5}
            px={2}
          >
            <Text fontSize={9} color="#000" isTruncated>
              92929292929922929
            </Text>
            <Text fontSize={12} bold color="#000" isTruncated>
              PAID
            </Text>
            <Text fontSize={11} bold color="#000" isTruncated>
              Dec  12 2022
            </Text>
            <Button 
              px={7} 
              py={1.5} 
              rounded={50} 
              bg="#66aff6"
              _text={{
                color: "#000",
              }}
              _pressed={{
                bg: "#66aff6"
              }}
              
            >
              300000 vnd
            </Button>
          </HStack>
        </Pressable>
        {/* chua tra */}
        <Pressable>
          <HStack
            space={4} 
            justifyContent="space-between"
            alignItems="center"
            bg="#fff"
            py={5}
            px={2}
          >
            <Text fontSize={9} color="#000" isTruncated>
              92929292929922929
            </Text>
            <Text fontSize={12} bold color="#000" isTruncated>
              NOT PAID
            </Text>
            <Text fontSize={11} bold color="#000" isTruncated>
              Dec  12 2022
            </Text>
            <Button 
              px={7} 
              py={1.5} 
              rounded={50} 
              bg="#66aff6"
              _text={{
                color: "#000",
              }}
              _pressed={{
                bg: "#66aff6"
              }}
              
            >
              300000 vnd
            </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  )
}