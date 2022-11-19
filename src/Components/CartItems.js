import { View, Text } from 'react-native'
import React from 'react'
import { Box, Button, HStack, VStack } from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view'
import { FontAwesome5 } from '@expo/vector-icons';



const Swiper =() => {
  
    <SwipeListView
        rightOpenValue={-50}
        previewRowKey="0"
        previewOpenValue={-40}
        previewOpenDelay={3000}
        data={products.slide(0,2)}
        renderHiddenItem={renderhidenItems}
        renderItem={renderItems}
        showsVerticalScrollIndicator={false}/>
    
}
const renderItems = (data, rowMap) => {
  <Pressable>
    <Box ml={6} mb={3}>
    <HStack 
      alignItems="center" 
      bg="#fff" 
      shadow={1} 
      rounded={10} 
      overflow="hidden"
    >
    <Center w="25%" bg="#ccc">
      <Image source={{uri: data.item.image}} alt={data.item.name} 
            w="full"
            h={24}
            resizeMode="contain"
      />
    </Center>
    <VStack w="60%" px={2} space={3}>
      <Text isTruncated color="#000" bold fontSize={14}>
        {data.item.name}
      </Text>
      <Text bold color="#000">{data.item.price} vnd</Text>
    </VStack>
        <Center>
          <Button bg="#ccc" _pressed={{bg: "#ddd"}} _text={{
            color: "#fff",
          }}>5</Button>
        </Center>
      </HStack>

    </Box>
  </Pressable>
}

const renderhidenItems = (data) => {
  <Pressable w={50} roundedTopRight={10} roundedBottomRight={10} h='88%' ml='auto'
  justifyContent="center" bg="#333"
  >
    <Center alignItems="center" space={2}>
      <FontAwesome5 name="trash" size={24} color="#fff" />
    </Center>
  </Pressable>
}

export default function CartItems() {
  return (
    <Box mr={6}>
      {/* <Swiper/> */}
    </Box>
  )
}