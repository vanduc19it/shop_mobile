import { Box, Heading, HStack, Image, ScrollView, Text, View, Spacer } from 'native-base'
import React, {useState} from 'react'
import Rating from '../Components/Rating'
import NumericInput from "react-native-numeric-input"
import Buttone from '../Components/Buttone'
import Review from '../Components/Review'
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from '@react-navigation/native';
import {baseURL} from '../Url'
import { addToCart, getCart } from '../Redux/Actions/CartActions'
import Colors from '../Colors'

function SingleProductScreen({route}) {

  const navigation = useNavigation()
  const product = route.params;
  const dispatch = useDispatch();

  const userLogin = useSelector((state) => state.userLogin);
  const {userInfo} = userLogin;
  
  const [quantity, setQuantity] = useState(0)


  const cart = useSelector((state)=> state.cart)
  const {cartItems} = cart;

  // them sp vao gio hang 
  const handleAddToCart = () => {
      dispatch(addToCart(userInfo.idUser, product, quantity))
      dispatch(getCart(userInfo.idUser))
      navigation.navigate("Cart", 1 )
  }
 


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
          <Heading bold fontSize={15} mb={2} lineHeight={22} mt={2}>
              {product.nameProduct} 
          </Heading>
          <Rating value={4}/>
          <HStack space={2} alignItems="center" my={5}>
            <NumericInput
              borderColor={Colors.white}
              totalwidth={140} 
              totalHeight={30} 
              iconSize={25} 
              step={1} 
              maxValue={15} 
              minValue={0}
              rounded textColor={Colors.black} iconStyle={{color: Colors.white}}
              rightButtonBackgroundColor={Colors.red}
              leftButtonBackgroundColor={Colors.blue}
              onChange={(e) => console.log(e)}
          />
          <Spacer/>
          <Heading bold color="#000" fontSize={15}>Giá: <Text color={Colors.red}>{product.price} đ</Text> </Heading>

          </HStack>
          <Text lineHeight={24} fontSize={12} >{product.description}
          </Text>
          <Buttone bg={Colors.blue} color="#fff" mt={10} onPress={handleAddToCart}>THÊM VÀO GIỎ HÀNG</Buttone>
          <Review product={product}/>
        </ScrollView>
    </Box>
  ) 
}

export default SingleProductScreen