import { Text } from 'react-native'
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
import { AirbnbRating } from 'react-native-ratings';
import { createProductFeedback } from '../Redux/Actions/ProductActions'

export default function Review({product}) {
  const dispatch = useDispatch();

  const userLogin = useSelector((state)=> state.userLogin)
  const {userInfo} = userLogin;

  const productGetFeedback = useSelector((state)=> state.productGetFeedback)
  const {feedbacks} = productGetFeedback;
  
  const [rating, setRating] = useState(0)
  const [comment, setComment] = useState("")


  //dispatch get comment
  useEffect(()=> {
    dispatch(getProductFeedback(product._id))
  },[dispatch,product._id])

  //danh gia san phan
  const handleReview = (e) => {
    e.preventDefault();
    if(comment != '' && rating > 0 ) {
      dispatch(createProductFeedback(product._id, userInfo.idUser, rating, comment));
    }
  }


  return (
    <Box my={9}>
        <Heading bold fontSize={15} mb={2}> REVIEW</Heading>
        {/* ko co comment */}
        {
          !userInfo ?
          (
            <Message children={"Không có đánh giá "}/>
          )
          : 
          (

            
            <ScrollView showsVerticalScrollIndicator={false}>
            { feedbacks.map((feedback, index) => (
              <Box p={3} bg={Colors.gray} mt={5} rounded={5} key={index}>
                <Box >
                  <Flex direction="row"  >
                  <Image source={{uri: `${baseURL}images/users/` + feedback.user.avatar}} 
                  w={10}
                  h={30}
                    resizeMode="contain"
                  alt={feedback.user.username}
                 
                  />
                  <Heading fontSize={15} mt={1} color="#000">{feedback.user.username}</Heading>

                </Flex>
              
                </Box>
                
                <Ratingg value={feedback.rate}/>
 
              
              <Text my={2} fontSize={11}>{moment(Number(feedback.createAt)).locale("vi").startOf("second").fromNow() }</Text>
              <Message children={feedback.comment}/>
            
            </Box>
            ))
            }
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
                {/* rating */}
              <Box floating="left">
              <AirbnbRating 
                reviews={["Quá thất vọng", "Sản phẩm tệ", "Bình thường", "Sản phẩm tốt","Sản phẩm tuyệt vời"]}
                size={25} 
                defaultRating={rating} 
                reviewSize={20} 
                onFinishRating={(value)=> setRating(value)} 
              
              />
              </Box>
              
              {/* <Select 
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
              </Select> */}
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
                value={comment}
                onChangeText={(e) => setComment(e)}
              />
            </FormControl>
            <Buttone bg="#66aff6" color="#fff" mt={5} onPress={handleReview}>
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
                "Bạn vui lòng đăng nhập để đánh giá"
              }
            />
            )
         
          }
            
          
          </VStack>
        </Box>
    </Box>
  )
}