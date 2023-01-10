import { Box, Flex, Heading, Image, Pressable, ScrollView, Text, HStack, Input, Button, Center } from 'native-base'
import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Rating from '../Components/Rating'
import {searchProduct} from "../Redux/Actions/ProductActions";
import { useNavigation } from '@react-navigation/native';
import Colors from '../Colors';
import {baseURL} from '../Url'
import { AntDesign } from '@expo/vector-icons';
function SearchScreen() {

    const navigation = useNavigation()
    const dispatch = useDispatch();

    const [searchText, setSearchText] = useState('');

    const handleSearch = () => {
        dispatch(searchProduct(searchText))
    }

    const productSearch = useSelector((state)=> state.productSearch);
    const {productsearch} = productSearch;

    

    
  return (
    <Box flex={1}>
        {/* search product */}
         <HStack 
        space={2} 
        w="full" 
        px={4} 
        bg={Colors.bar} 
        py={4} 
        alignItems="center"
        safeAreaTop
    >
        <Center>
        <AntDesign name="leftcircleo" size={24} color={Colors.white} onPress={() => navigation.navigate("Home")} />
        </Center>
        <Input placeholder="Bạn tìm gì hôm nay ?"
            rounded={50}
            w="64%"
            bg={Colors.white}
            type="search"
            variant="filled"
            h={10}
            fontSize={14}
            borderWidth={0}
            _focus={{
                bg: Colors.white
            }}
            value={searchText}
            onChangeText={(e)=> setSearchText(e)}
           
        />
        <Button rounded={40} bg={Colors.red} bold onPress={handleSearch}>Tìm kiếm</Button>
        </HStack>
        {/* show product search */}
         <ScrollView flex={1} showsVerticalScrollIndicator={false}>
         
         <Flex 
             flexWrap="wrap" 
             direction="row" 
             justifyContent="space-between"
             px={6}
         >
             {
                 productsearch.map((product) =>(
                     <Pressable 
                         key={product._id} 
                         w="47%"
                         bg="#fff"
                         rounded="md"
                         shadow={2}
                         pt={0.3}
                         my={3}
                         pb={2}
                         overflow="hidden"
                         onPress={() => navigation.navigate("SingleProductScreen", product)}
 
                     >
                         <Image
                             source={{uri: `${baseURL}images/products/` + product.imageProduct}}
                             alt={product.nameProduct}
                             w="full"
                             h={24}
                             resizeMode="contain"
                         />
                         <Box px={4} pt={1}>
                             <Heading size="xs" bold>
                                 {product.nameProduct} 
                             </Heading>
                             <Heading size="sm" bold>
                                 {product.price} VND
                             </Heading>
                             <Text fontSize={10} mt={1} isTruncated w="full">{product.name}</Text>
                             <Rating value={product.rating}/>
                         </Box>
                     </Pressable>
                     
                 ))
             }
         </Flex>
        </ScrollView>
    </Box>
   
  )
}

export default SearchScreen