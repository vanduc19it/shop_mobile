import { Box, Heading, HStack, Image, ScrollView, Text, View, Spacer } from 'native-base'
import React, {useState} from 'react'
import Rating from '../Components/Rating'
import NumericInput from "react-native-numeric-input"
import Buttone from '../Components/Buttone'
import Review from '../Components/Review'
function SingleProductScreen() {
  const [value, setValue] = useState(0)
  return (
    <Box safeArea flex={1} bg="#fff"> 
        <ScrollView px={5} showsVerticalScrollIndicator={false}>
          <Image 
            source={require("../../assets/shop.png")}
            alt="Image"
            w="full"
            h={300}
            resizeMode="contain"
          />
          <Heading bold fontSize={15} mb={2} lineHeight={22}>
              San pham1 
          </Heading>
          <Rating value={4}/>
          <HStack space={2} alignItems="center" my={5}>
            <NumericInput value={value} totalwidth={140} totalHeight={30} iconSize={25} step={1} maxValue={15} minValue={0}
            borderColor="#ccc" rounded textColor="#000" iconStyle={{color: "#000"}}
            rightButtonBackgroundColor="#66aff6"
            leftButtonBackgroundColor="#66aff6" 
          />
          <Spacer/>
          <Heading bold color="#000" fontSize={19}>500 vnd</Heading>

          </HStack>
          <Text lineHeight={24} fontSize={12}>TLDRFlutter and React Native are natural competitors as two of the most used multi-platform mobile app frameworks.
           The answer lies not in the technical aspects of React Native and Flutter at all.
            Hiring developers is famously difficult right now, but the pool of developers to draw from is far larger than Flutter's.
          </Text>
          <Buttone bg="#66aff6" color="#fff" mt={10}>THÊM VÀO GIỎ HÀNG</Buttone>
          <Review/>
        </ScrollView>
    </Box>
  ) 
}

export default SingleProductScreen