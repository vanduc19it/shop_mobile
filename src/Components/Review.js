import { View, Text } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Box, CheckIcon, FormControl, Heading, Select, TextArea, VStack, ScrollView, Image, Flex } from 'native-base'
import Ratingg from './Rating'
import Message from './Notifications/Message'
import Buttone from '../Components/Buttone'
import { useDispatch, useSelector } from "react-redux";
import { getProductFeedback } from '../Redux/Actions/ProductActions'
import moment from "moment";
import Colors from '../Colors'
import {baseURL} from '../Url'
import { Rating, AirbnbRating } from 'react-native-ratings';

export default function Review({product}) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state)=> state.userLogin)
  const {userInfo} = userLogin;


  const productGetFeedback = useSelector((state)=> state.productGetFeedback)
  const {feedbacks} = productGetFeedback;
  
  const [rating, setRating] = useState('')

  useEffect(()=> {
    dispatch(getProductFeedback(product._id))
  },[dispatch,product._id])


  return (
    <Box my={9}>
        <Heading bold fontSize={15} mb={2}> REVIEW</Heading>
        {/* ko cos comment */}
        {
          !userInfo ?
          (
            <Message children={"ko co comment"}/>
          )
          : 
          (

            
            <ScrollView showsVerticalScrollIndicator={false}>
              <Box p={3} bg={Colors.gray} mt={5} rounded={5}>
            {
              feedbacks.map((feedback) => (
                <>
                <Box >
                  <Flex direction="row" >
                  <Image source={{uri: `${baseURL}images/users/` + feedback.user.avatar}} 
                  w={10}
                  h={30}
                    resizeMode="contain"
                  alt={feedback.user.username}
                 

                  />
                  <Heading fontSize={15} mt={1} color="#000">{feedback.user.username}</Heading>
                  <AirbnbRating size={12} defaultRating={feedback.rate}isDisabled   reviews={[]} />
                </Flex>
              
                </Box>
                
                <Ratingg value={feedback.rate}/>
 
              
              <Text my={2} fontSize={11}>{moment(Number(feedback.createAt)).locale("vi").startOf("second").fromNow() }</Text>
              <Message children={feedback.comment}/>
              </>
              ))
            }
            
            </Box>
            </ScrollView>
           
          )
        }
       
   

        <Box mt={6} >
          <Heading fontSize={15} color="#000" mb={4}> ĐÁNH GIÁ SẢN PHẨM</Heading>
          <VStack>
          {
            userInfo ? 
            (
              <>
                <FormControl>
              <FormControl.Label 
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }} 
              >

              </FormControl.Label>

              <AirbnbRating size={18} defaultRating="1"  />
              <Select 
              bg="#66aff6"
              borderWidth={0} 
              rounded={5} 
              py={4} placeholder="Choose" 
              _selectedItem={{
                bg: "#66aff6",
                endIcon: <CheckIcon size={2}  />,
               
              }}
              value={rating}
              onValueChange={(e) =>setRating(e)}
              >
                <Select.Item label="qua that vong" value="1"/>
                <Select.Item label="te" value="2"/>
                <Select.Item label="binh thuong" value="3"/>
                <Select.Item label="tot" value="4"/>
                <Select.Item label="tuyet voi" value="5"/>
              </Select>
            </FormControl>
            <FormControl>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }}
              >
                Comment
              </FormControl.Label>
              <TextArea h={24} w="full" placeholder="san pham nhu db..." borderWidth={0}
                bg="#66aff6"
                py={4} 
                _focus={{
                  bg: "#66aff6",
                }}
              />
            </FormControl>
            <Buttone bg="#66aff6" color="#fff" mt={5}>
              BINH LUAN
            </Buttone>
            </>
            
            )
            : 
            (
              <Message 
              color="#fff"
              bg="#000"
              children={
                "XIn dang nhap de binh luan"
              }
            />
            )
         
          }
            
          
          </VStack>
        </Box>
    </Box>
  )
}