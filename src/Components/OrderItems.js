import { View, Text } from 'react-native'
import React from 'react'
import { Button, Center, FlatList, HStack, Pressable, VStack } from 'native-base'

export default function OrderItems() {
  return (
    <FlatList 
        // showsVerticalScrollIndicator={false} 
        // data={products.slide(0,3)}
        // keyExtractor={(item)=> item._id}
        // renderItem={({item}) => (
        //     <Pressable>
        //         <Box mb={3}>
        //             <HStack
        //                 alignItems="center"
        //                 bg={Colors.white}
        //                 shadow={1}
        //                 rounded={10}
        //                 overflow="hidden"
        //             >
        //                 <Center w="25%" bg={Colors.gray}>
        //                     <Image 
        //                         source={{uri: item.image}}
        //                         alt={item.name}
        //                         w="full"
        //                         h={24}
        //                         resides="contain"
        //                     />
        //                 </Center>
        //                 <VStack w="60%" px={2}>
        //                     <Text isTruncated color={Colors.black} bold fontSize={12}>
        //                         {item.name}
        //                     </Text>
        //                     <Text color={Colors.black} mt={2}>
        //                         {item.price}
        //                     </Text>
        //                 </VStack>
        //                 <Center>
        //                     <Button 
        //                         bg={Colors.main} 
        //                         _pressed={{bg: Colors.main}}
        //                         _text={{
        //                             color: Colors.white
        //                         }}
        //                     >
        //                         5
        //                     </Button>
        //                 </Center>
        //             </HStack>

        //         </Box>
        //     </Pressable>
        // )}
    />


    
  )
}