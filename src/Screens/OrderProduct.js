import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, Checkbox, Divider, Flex, FormControl, HStack, Image, Input, ScrollView, Text, VStack} from 'native-base'
import React from 'react'
import Buttone from '../Components/Buttone'
import Colors from '../Colors'
import { EvilIcons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';


function OrderProduct() {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={Colors.main} py={5}> 
       <HStack>
        <Center ml={4} mb={4}>
          <AntDesign name="leftcircleo" size={24} color={Colors.black} onPress={() => navigation.navigate("Cart")} />
        </Center>
     
          <Center w="full"   pb={4} pr={10} >
            <Text color={Colors.white} fontSize={16} bold >
              TIẾN HÀNH THANH TOÁN
            </Text>
          </Center>
      </HStack>
       
      <Box h="full" bg="#fff">
        <ScrollView showsVerticalScrollIndicator={false} bg={Colors.submain}>
          <HStack bg={Colors.gray} space={2} >
              <Box w="15%" bg={Colors.submain}>
                <Flex  alignSelf="center" mt={5} >
                  <Center>
                    <EvilIcons name="location" size={26} color="black" />
                  </Center>
                
                </Flex>
              </Box>
             
              <VStack space={2} mt={5} w="85%" pr={4} >
              
              <HStack space={2} >
                <Text bold fontSize="15px">Văn Đức</Text>
                <Text bold fontSize="15px">(+84) 0354941620</Text>
                
                <Center>      
                      <AntDesign name="right" size={14} color="#ccc" />
                </Center>
               
               
              </HStack>
              <Text color={Colors.darkgray} fontSize="14px" mb={4}>Trường Đại học cntt và tt Viet Han Da Nag, 470 tran dai nghia, Viet Nam</Text>
            
             

            </VStack>
           
            
          </HStack>
          {/* item */}
          
          <Box bg={Colors.white} w="full" mb={2} px={5}>

          <VStack>
              <HStack space={2} mb={3} mt={3}>
                  <Image 
                      source={{uri: "https://cdn.pixabay.com/photo/2020/11/06/05/33/woman-5716875__340.png"}} 
                      alt="abc" 
                      h={30}  w={30}
                      resizeMode="stretch"
                      rounded="full"
                  />
                  <Center>
                      <Text bold>HelloYou Shop</Text>
                  </Center>
                 
              </HStack>
              <HStack space={5}>
                  
                  <Image 
                      source={{uri: "https://cdn.pixabay.com/photo/2020/11/06/05/33/woman-5716875__340.png"}} 
                      alt="abc" 
                      h={100}  w={100}
                      resizeMode="stretch"
                      onPress={() => navigation.navigate("SingleProductScreen")}
                  />
                  <VStack space={2} w="64%"> 
                    <Text mt={1}>Ten sanpham</Text>

                   
                    <Text bold mt={2}>125.555 đ</Text>
                    <Flex alignItems="flex-end" w="full">
                    <Text >x 1</Text>
                    </Flex>
                  </VStack>
                
              </HStack>
              <HStack>
              <Box w="80%"  mt={5}>
                <Text   color={Colors.darkgray}>Tin nhắn cho người bán </Text>
              </Box>
              <Box w="20%" mt={5}>
                <HStack>
                    <Text >Chat ngay </Text>
                    <Box mt={1}><AntDesign name="right" size={14} color="#ccc" /> </Box>
                </HStack>        
                   
              </Box>
              </HStack>
              <Divider bg="emerald.500" thickness="1"/>
              <Flex alignItems="flex-end" pt={2} pb={2}>
                  <Text >1 mặt hàng, tổng cộng <Text bold>123.456 đ</Text> </Text>
              </Flex>
          </VStack>
          </Box>

          <Box bg={Colors.white} w="full" mb={2} px={5}>

          <VStack>
              <HStack space={2} mb={3} mt={3}>
                  <Image 
                      source={{uri: "https://cdn.pixabay.com/photo/2020/11/06/05/33/woman-5716875__340.png"}} 
                      alt="abc" 
                      h={30}  w={30}
                      resizeMode="stretch"
                      rounded="full"
                  />
                  <Center>
                      <Text bold>HelloYou Shop</Text>
                  </Center>
                 
              </HStack>
              <HStack space={5}>
                  
                  <Image 
                      source={{uri: "https://cdn.pixabay.com/photo/2020/11/06/05/33/woman-5716875__340.png"}} 
                      alt="abc" 
                      h={100}  w={100}
                      resizeMode="stretch"
                      onPress={() => navigation.navigate("SingleProductScreen")}
                  />
                  <VStack space={2} w="64%"> 
                    <Text mt={1}>Ten sanpham</Text>

                   
                    <Text bold mt={2}>125.555 đ</Text>
                    <Flex alignItems="flex-end" w="full">
                    <Text >x 1</Text>
                    </Flex>
                  </VStack>
                
              </HStack>
              <HStack>
              <Box w="80%"  mt={5}>
                <Text   color={Colors.darkgray}>Tin nhắn cho người bán </Text>
              </Box>
              <Box w="20%" mt={5}>
                <HStack>
                    <Text >Chat ngay </Text>
                    <Box mt={1}><AntDesign name="right" size={14} color="#ccc" /> </Box>
                </HStack>        
                   
              </Box>
              </HStack>
              <Divider bg="emerald.500" thickness="1"/>
              <Flex alignItems="flex-end" pt={2} pb={2}>
                  <Text >1 mặt hàng, tổng cộng <Text bold>123.456 đ</Text> </Text>
              </Flex>
          </VStack>
          </Box>
          <VStack w="full" mb={2}  bg={Colors.white} pb={4}>
          <HStack>
              <Box w="70%"  mt={2} ml={2}>
                <Text ml={2}  color={Colors.darkgray}>Phương thức thanh toán </Text>
              </Box>
              <Box w="30%" mt={2}>
                <HStack>
                    <Text >Xem tất cả </Text>
                    <Box  mt={1}><AntDesign name="right" size={14} color="#ccc" /> </Box>
                </HStack>        
                   
              </Box>
            </HStack>
            <Box>
              <VStack space={6}>
                <HStack space={10}>
                <Box w="15%">
                  <Image source={require("../../assets/shipcod.jpg")}
                    alt="logo"
                    size="sm"
                    h={8}  w={8}
                    resizeMode="stretch"
                    ml={4}
                  />
                  </Box>
                  <Text w="50%">Thanh toán khi nhận hàng</Text>
                  <Flex alignSelf="center">
                      <Center  flex={1}>
                          <Checkbox value="test"colorScheme="green" rounded="full"  accessibilityLabel="This is checkbox" defaultIsChecked />
                      </Center>
                  </Flex>
                </HStack>
                <HStack space={10}>
                  <Box w="15%">
                  <Image source={require("../../assets/MoMo.jpg")}
                    alt="logo"
                    size="sm"
                    h={8}  w={8}
                    resizeMode="stretch"
                    ml={4}
                  />
                  </Box>
               
                  <Text w="50%">Ví điện tử MoMo</Text>
                  <Flex alignSelf="center">
                      <Center  flex={1}>
                          <Checkbox value="test"colorScheme="green" rounded="full"  accessibilityLabel="This is checkbox" defaultIsChecked />
                      </Center>
                  </Flex>
                </HStack>
                <HStack space={10}>
                <Box w="15%">
                  <Image source={require("../../assets/banking.jpg")}
                    alt="logo"
                    size="sm"
                    h={8}  w={8}
                    resizeMode="stretch"
                    ml={4}
                  />
                  </Box>
                  <Text w="50%">Ngân hàng điện tử</Text>
                  <Flex alignSelf="center">
                      <Center  flex={1}>
                          <Checkbox value="test"colorScheme="green" rounded="full"  accessibilityLabel="This is checkbox" defaultIsChecked />
                      </Center>
                  </Flex>
                </HStack>
              </VStack>
            </Box>
          </VStack>
         
        </ScrollView>
        <HStack  bg={Colors.white} borderColor={Colors.gray} borderWidth={1} shadow={1} pb={4}>
                <Center>
                <Text bold italic fontSize={15} p={4} pt={8} pb={8}>Tổng thanh toán: <Text color={Colors.red}>1234500 đ</Text></Text>
                </Center>
                
                <Center>
                  <Button 
                      bg={Colors.red} 
                      color={Colors.white}  
                      rounded={0} ml={4} 
                      leftIcon={<MaterialCommunityIcons name="cart-variant" size={24} color="white" />}
                      onPress={()=> navigation.navigate("OrderProduct")}
                  >
                        Đặt hàng 
                  </Button>
                </Center>
              </HStack>
      </Box>
    </Box>
  ) 
}

export default OrderProduct