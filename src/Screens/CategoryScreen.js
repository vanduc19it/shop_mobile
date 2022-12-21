import React, { useEffect, useState } from 'react'
import {Center, HStack, Image, Pressable, ScrollView, Text, Flex, Box} from 'native-base'
import axios from 'axios';
import { baseURL } from '../Url';
import Colors from '../Colors';
export default function CategoryScreen() {
  const [category, setCategory] = useState([]);
  const [itemCategory, setItemCategory] = useState([]);

  useEffect(()=> {
    const fetchCategory = async () => {
      const {data} = await axios.get(`${baseURL}category`);
      setCategory(data);
    };
    fetchCategory();
  },[]);
  console.log(category)

  

  const handlePress = async (idCategory) => {
   
      const {data} = await axios.get(`${baseURL}product/get-by-idcategory/${idCategory}`);
      if(data.result == false) {
        setItemCategory([])
      }
      else {
        setItemCategory(data.result);
      }
  }
  return (
    <HStack space={1}>
      <ScrollView w="30%" bg="#ccc">
      {
        category.map((item) => (
            <Pressable 
                key={item._id} 
                borderWidth={0.8}
                borderColor={Colors.white}
                borderBottomColor={Colors.gray}
                bg={Colors.white}
                _pressed={
                  {

                    bg:Colors.blue2
                  }
                }
                onPress={()=> handlePress(item._id)}
            >
              <Center mt={1}>
                <Image 
                source={{uri: `${baseURL}images/categories/${item.imageCategory}`}} 
                alt={item.nameCategory} 
                resizeMode="contain"
                w="20"
                h="20"
                rounded="20"
                />
                
                <Text fontSize={10} >{item.nameCategory}</Text>
                </Center>  
            </Pressable>
        ))
      }
      

      </ScrollView>
      <ScrollView w="70%" bg={Colors.white}>
        <Flex
        direction="row"
        flexWrap="wrap" 
         >
            {
              itemCategory.map((item) => (
                  <Pressable 
                      w="42%" 
                      borderRadius={4} 
                      margin={1}
                      bg={Colors.white} 
                      shadow={1} 
                      ml={3}>
                    <Center>
                    <Image 
                                source={{uri: `${baseURL}images/products/${item.imageProduct}`}} 
                                alt={item.nameProduct} 
                                resizeMode="contain"
                                w="20"
                                h="20"
                                
                            />
                      <Text fontSize={12} textAlign="center">{item.nameProduct}</Text>
                    </Center>
                    
                  </Pressable>
              ))
            }
        </Flex>
      </ScrollView>
      
    </HStack>
  )
}