import { Box, Heading, ScrollView, Text, View } from 'native-base'
import React from 'react'
import Colors from '../Colors'
import OrderInfo from '../Components/OrderInfo'
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import OrderItems from '../Components/OrderItems';
import OrderModel from '../Components/OrderModel';

function OrderScreen() {
  return (
   <Box bg={Colors.white} flex={1} safeArea pt={6}>
     <Box>
       <ScrollView horizontal={true} showHorizontalScrollIndicator={false}>
         <OrderInfo 
          title="KHACH HANG" 
          subTitle="van duc" 
          text="cvduc.19it1@vku.udn.vn"
          icon={<FontAwesome name="user" size={30} color="black" />}
         />
         <OrderInfo 
          title="SHIP"
          success 
          subTitle="Shipping: GHN" 
          text="Phương thức thanh toán: Shipcod"
          icon={<MaterialIcons name="local-shipping" size={30} color="black" />}
         />
         <OrderInfo 
          title="GIAO HANG" 
          subTitle="Address: Da Nang" 
          danger
          text="ktx VKU,0354941620"
          icon={<Ionicons name="location-sharp" size={30} color="black" />}
         />
         
       </ScrollView>
     </Box>
     <Box px={6} flex={1} pb={3}>
        <Heading bold fontSize="15" isTruncated my={4}>
          SAN PHAM
        </Heading>
        <OrderItems/>
        <OrderModel/>
     </Box>

   </Box>
  ) 
}

export default OrderScreen