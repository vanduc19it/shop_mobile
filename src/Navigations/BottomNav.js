import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../Colors';
import HomeScreen from '../Screens/HomeScreen'
import CartScreen from '../Screens/CartScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import { Center,  Pressable } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import StackNav from './StackNav';

const Tab = createBottomTabNavigator();
const CustomTab = ({ children, onPress}) => (
    <Pressable 
        onPress={onPress} 
        h={70} 
        w={70} 
        rounded="full" 
        bg={Colors.main} 
        top={-30} 
        shadow={2}
    >
        {children}
    </Pressable>
)

export default function BottomNav() {
  return (
    <Tab.Navigator 
        backBehavior="Main" 
        initialRouteName="Main"
        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {...styles.tab},
            headerShown: false,
            tabBarHideOnKeyboard: true,
        }}
    >
        <Tab.Screen 
            name="Main" 
            component={StackNav} 
            options={{
            tabBarIcon: ({focused}) => (
               <Center>
                   {focused ? (
                       <AntDesign name="home" size={24} color={Colors.main} />

                   ):
                   (
                       <AntDesign name="home" size={24} color={Colors.black} />
                   )}
               </Center>
           )
       }}
       />

        <Tab.Screen 
            name="Cart" 
            component={CartScreen} 
            options={{
                tabBarButton: (props) => <CustomTab {...props} />,
                tabBarIcon: ({ focused }) => (
                    <Center>
                        {focused ? (
                            <Ionicons name="ios-cart" size={24} color={Colors.white} />

                        )
                        :
                        (
                            <Ionicons name="ios-cart-outline" size={24} color={Colors.white} />
                        )}
                    </Center>
                 ),
            }}
       />

        <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <Center>
                        {focused ? (
                            <AntDesign name="user" size={24} color={Colors.main} />
                        ):
                        (
                            <AntDesign name="user" size={24} color={Colors.black} />
                        )}
                    </Center>
                ),
            }}
       />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
    tab: {
        elevation: 0,
        backgroundColor: Colors.white,
        height: 60,
    }
})