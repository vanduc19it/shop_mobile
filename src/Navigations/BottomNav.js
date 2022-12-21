import { StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '../Colors';
import HomeScreen from '../Screens/HomeScreen'
import CartScreen from '../Screens/CartScreen'
import ProfileScreen from '../Screens/ProfileScreen'
import { Center,  Text, Pressable, VStack } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import StackNav from './StackNav';
import CategoryScreen from '../Screens/CategoryScreen';
import MessageScreen from '../Screens/MessageScreen';

import { Entypo } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

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
                       <VStack>
                           <Center>
                                <Entypo name="home" size={24} color={Colors.bar} />
                                <Text color={Colors.bar} fontSize={12} >Trang chủ</Text>
                           </Center>
                       </VStack>
                       
                   ):
                   (
                    <VStack>
                        <Center>
                            <AntDesign name="home" size={24} color={Colors.black} />
                            <Text color={Colors.black} fontSize={12} >Trang chủ</Text>
                        </Center>
                    </VStack>
                       
                   )}
               </Center>
           )
       }}
       />

        <Tab.Screen 
            name="Category" 
            component={CategoryScreen} 
            options={{
            tabBarIcon: ({focused}) => (
               <Center>
                   {focused ? (
                        <VStack>
                            <Center>
                                <AntDesign name="appstore1" size={24} color={Colors.bar} />
                                <Text color={Colors.bar} fontSize={12} >Danh mục</Text>
                            </Center>
                        </VStack>
                        
                   ):
                   (
                    <VStack>
                            <Center>
                                <AntDesign name="appstore-o" size={24} color={Colors.black} />
                                <Text color={Colors.black} fontSize={12}  >Danh mục</Text>
                            </Center>
                        </VStack>
                    
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
            name="Message" 
            component={MessageScreen} 
            options={{
            tabBarIcon: ({focused}) => (
               <Center>
                   {focused ? (
                        <VStack>
                            <Center>
                                <Ionicons name="md-chatbox-sharp" size={23} color={Colors.bar} />
                                <Text color={Colors.bar} fontSize={12}  >Chat</Text>
                            </Center>
                        </VStack>
                        
                   ):
                   (
                    <VStack>
                        <Center>
                            <Ionicons name="md-chatbox-outline" size={23} color="black" />
                            <Text color={Colors.black} fontSize={12}  >Chat</Text>
                        </Center>
                    </VStack>
                        
                   )}
               </Center>
           )
       }}
       />

        <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
                tabBarIcon: ({focused}) => (
                    <Center>
                        {focused ? (
                            <VStack>
                                <Center>
                                    <FontAwesome name="user" size={24} color={Colors.bar} />
                                    <Text color={Colors.bar} fontSize={12} >Tài khoản</Text>
                                </Center>
                                
                            </VStack>
                           
                        ):
                        (
                            <VStack>
                                 <Center>
                                    <FontAwesome name="user-o" size={24} color="black" />
                                    <Text color={Colors.black} fontSize={12}  >Tài khoản</Text>
                                 </Center>
                                
                            </VStack>
                            
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