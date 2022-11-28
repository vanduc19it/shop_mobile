import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Box, Center, Flex, HStack, Image, Pressable, ScrollView } from 'native-base'
import axios from "axios"
import {baseURL} from '../Url'
import Colors from '../Colors'
export default function Category() {

    const [category, setCategory] = useState([]);

      useEffect(()=> {
        const fetchCategory = async () => {
          const {data} = await axios.get(`${baseURL}category`);
          setCategory(data);
        };
        fetchCategory();
      },[]);
      console.log(category)
  return (
    <Box h="250">
        <ScrollView flex={1} showsVerticalScrollIndicator={false} horizontal w="full" bg={Colors.white}  mb={4}>
            <Flex  
            flexWrap="wrap" 
            direction="column" 
            justifyContent="space-evenly"
            px={6}>
                {
                    category.map((item)=> (
                        <Pressable w="20" h="20" bg={Colors.white} mr={6} rounded={20} key={item._id} borderColor={Colors.gray} borderWidth="1" >
                            <Image 
                                source={{uri: `${baseURL}images/categories/${item.imageCategory}`}} 
                                alt={item.nameCategory} 
                                resizeMode="contain"
                                w="20"
                                h="20"
                                rounded="20"
                            />
                            <Center mt={1}>
                                <Text fontSize={3} >{item.nameCategory}</Text>
                            </Center>  
                        </Pressable>
                    ))
                }                  
            </Flex>
        </ScrollView>
    </Box>  
     
   
  )
}