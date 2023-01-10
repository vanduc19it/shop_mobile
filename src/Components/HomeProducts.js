import { Box, Divider, Flex, Heading, Image, Pressable, ScrollView, Text } from 'native-base'
import React, {  useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import Rating from './Rating'
import { listProduct} from "../Redux/Actions/ProductActions";
import { useNavigation } from '@react-navigation/native';

import {baseURL} from '../Url'
import Slider from './Slider';
import Category from './Category';
import Colors from '../Colors';

function HomeProducts() {

    const navigation = useNavigation()
    const dispatch = useDispatch();

   

    
    const productList = useSelector((state)=> state.productList);
    const {products} = productList;
  

    useEffect(()=> {
        dispatch(listProduct())
      },[dispatch])

    
  return (
    <ScrollView flex={1} showsVerticalScrollIndicator={false}>
          <Slider/>
        <Category/>
       
        <Flex 
            flexWrap="wrap" 
            direction="row" 
            justifyContent="space-between"
            px={4}
        >
             <Text fontSize={16} bold>Danh sách sản phẩm</Text>
             <Divider bg={Colors.gray}/>
            {
                products.map((product) =>(
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
  )
}

export default HomeProducts