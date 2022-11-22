import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from '../Screens/HomeScreen'
import SingleProductScreen from '../Screens/SingleProductScreen'
import ShippingScreen from '../Screens/ShippingScreen'
import PaymentScreen from '../Screens/PaymentScreen'
import PlaceOrderScreen from '../Screens/PlaceOrderScreen'
import Tabs from '../Components/Profile/Tabs'
import EditProfile from '../Components/Profile/EditProfile'


const Stack = createNativeStackNavigator()
export default function StackNav() {
  return (
    <Stack.Navigator 
          initialRouteName="Bottom" 
          screenOptions={{
            headerShown: false,
          }}
        >
         <Stack.Screen name="Home" component={HomeScreen} />
         <Stack.Screen name="SingleProductScreen" component={SingleProductScreen} />
         <Stack.Screen name="Shipping" component={ShippingScreen} />
         <Stack.Screen name="Checkout" component={PaymentScreen} />
         <Stack.Screen name="PlaceOrder" component={PlaceOrderScreen} />
         <Stack.Screen name="Tab" component={Tabs} />
         <Stack.Screen name="EditProfile" component={EditProfile} />
    </Stack.Navigator>
  )
}