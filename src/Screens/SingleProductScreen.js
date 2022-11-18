import { Box, Heading, HStack, Image, ScrollView, Text, View, Spacer } from 'native-base'
import React, {useEffect, useState} from 'react'
import Rating from '../Components/Rating'
import NumericInput from "react-native-numeric-input"
import Buttone from '../Components/Buttone'
import Review from '../Components/Review'
import { useDispatch, useSelector } from "react-redux";

import {baseURL} from '../Url'
import { listProductDetail } from '../Redux/Actions/ProductActions'

function SingleProductScreen({route}) {

  const product = route.params;
  
  const [value, setValue] = useState(1)

  const dispatch = useDispatch();

 

  return (
    <Box safeArea flex={1} bg="#fff"> 
        <ScrollView px={5} showsVerticalScrollIndicator={false}>
          <Image 
            source={{uri: `${baseURL}images/products/` + product.imageProduct}}
            alt="Image"
            w="full"
            h={300}
            resizeMode="contain"
            mt ={2}
          />
          <Heading bold fontSize={15} mb={2} lineHeight={22}>
              {product.nameProduct} 
          </Heading>
          <Rating value={4}/>
          <HStack space={2} alignItems="center" my={5}>
            <NumericInput value={value} totalwidth={140} totalHeight={30} iconSize={25} step={1} maxValue={15} minValue={0}
            borderColor="#ccc" rounded textColor="#000" iconStyle={{color: "#000"}}
            rightButtonBackgroundColor="#66aff6"
            leftButtonBackgroundColor="#66aff6" 
          />
          <Spacer/>
          <Heading bold color="#000" fontSize={19}>{product.price} vnd</Heading>

          </HStack>
          <Text lineHeight={24} fontSize={12}>{product.description}
          </Text>
          <Buttone bg="#66aff6" color="#fff" mt={10}>THÊM VÀO GIỎ HÀNG</Buttone>
          <Review product={product}/>
        </ScrollView>
    </Box>
  ) 
}

export default SingleProductScreen