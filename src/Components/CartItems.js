import { Text } from 'react-native'
import React from 'react'
import { Box, Button, Center, HStack, Image, Pressable, VStack,ScrollView } from 'native-base'
import { SwipeListView } from 'react-native-swipe-list-view'
import { FontAwesome5 } from '@expo/vector-icons';
import {baseURL} from '../Url'
import { useNavigation } from '@react-navigation/native';




    
const renderitem = (data) => (
  <Pressable>
    <Box ml={6} mb={3}>
      <HStack 
        alignItems="center" 
        bg="#fff" 
        shadow={1} 
        rounded={10} 
        overflow="hidden"
      >
      <Center w="25%" bg="#fff">
        <Image 
          source={{uri: `${baseURL}images/products/` + data.item.product.imgProduct}}
          alt={data.item.product.nameProduct} 
          w="full"
          h={24}
          resizeMode="contain"
        />
      </Center>
      <VStack w="60%" px={2} space={3}>
        <Text isTruncated color="#000" bold fontSize={15}>
          {data.item.product.nameProduct}
        </Text>
        <Text bold color="#000">{data.item.product.unit_price} vnd</Text>
      </VStack>
          <Center>
            <Button bg="#000" _pressed={{bg: "#000"}} _text={{
              color: "#fff",
            }}>{data.item.product.quantity}</Button>
          </Center>
      </HStack>
    </Box>
  </Pressable> 
)

const hidenItem = () => {
//   const handleRemoveCart = ()=> {
//     const navigation = useNavigation()
//      navigation.navigate("Home")
//      // dispatch(addToCart(userInfo.idUser, product, quantity))
//  }

 return (
    <Pressable
        w={50} 
        roundedTopRight={10} 
        roundedBottomRight={10} 
        h='88%' 
        ml='auto'
        justifyContent="center" 
        bg="#333"
        onPress={handleRemoveCart}
      >
        <Center alignItems="center" space={2}>
          <FontAwesome5 name="trash" size={24} color="#fff" />
        </Center>
      </Pressable>
 )
  
}

const CartItems = (prop) => {
  const datta = prop.cartItems;
  console.log(datta);
  

  return (
    <Box mr={6}>
       {/* <SwipeListView
          rightOpenValue={-50}
          previewRowKey="0"
          previewOpenValue={-40}
          previewOpenDelay={3000}
          data={datta}
          renderItem={renderitem}
          renderHiddenItem={hidenItem}
          showsVerticalScrollIndicator={false}
       /> */}
    </Box>
  );
};

export default CartItems;