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
    console.log(productsearch.length)
    

    
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
        <Text ml={6} my={2} bold fontSize={18}>Sản phẩm tìm kiếm</Text>
       
         <ScrollView flex={1} showsVerticalScrollIndicator={false}>
         
         <Flex 
             flexWrap="wrap" 
             direction="row" 
             justifyContent="space-between"
             px={6}
         >
              { productSearch.length == 0 ? (<Text>Không tìm thấy sản phẩm, bạn vui lòng thử lại!</Text>) :
                productsearch.map((product) =>(
                    <Pressable 
                        key={product._id} 
                        w="47%"
                        bg="#fff"
                        rounded="md"
                        shadow={1}
                        pt={0.3}
                        my={2}
                        pb={2}
                        overflow="hidden"
                        onPress={() => navigation.navigate("SingleProductScreen", product)}

                    >
                        <Image
                            source={{uri: `${baseURL}images/products/` + product.imageProduct}}
                            alt={product.nameProduct}
                            w="full"
                            h="140"
                            resizeMode="stretch"
                        />
                        <Box px={1}>
                            <Text textAlign="center" bold  mt={1}>
                                {product.nameProduct} 
                            </Text>
                            <Heading size="xs" bold color={Colors.red} pl={2} pt={2}>
                                Giá: {product.price} đ
                            </Heading>
                            <Text fontSize={10} w="full">{product.name}</Text>
                            <Box ml={2}>
                            <Rating value={product.rating}/>
                            </Box>
                            
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