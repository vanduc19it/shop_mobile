import { Box, Flex, Heading, Image, Pressable, ScrollView, Text } from 'native-base'
import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Rating from './Rating'
import { listProduct} from "../Redux/Actions/ProductActions";
import { useNavigation } from '@react-navigation/native';

import {baseURL} from '../Url'

function HomeProducts() {

    const navigation = useNavigation()
    const dispatch = useDispatch();

   

    
    const productList = useSelector((state)=> state.productList);
    const {loading, error, products} = productList;
    console.log(loading, error, products);

    useEffect(()=> {
        dispatch(listProduct())
      },[dispatch])

    
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
        <Flex 
            flexWrap="wrap" 
            direction="row" 
            justifyContent="space-between"
            px={6}
        >
            {
                products.map((product) =>(
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
  )
}

export default HomeProducts