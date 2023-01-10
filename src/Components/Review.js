
import React, { useState, useEffect } from 'react'
import { Box, CheckIcon, FormControl, Heading, Select, TextArea, VStack, ScrollView, useToast, Image, Flex ,Text} from 'native-base'
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

  const toast = useToast()
  //danh gia san phan
  const handleReview = (e) => {
    e.preventDefault();
    if(comment != '' && rating > 0 ) {
      dispatch(createProductFeedback(product._id, userInfo.idUser, rating, comment));
      toast.show({
        render: () => {
          return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                  Đánh giá sản phẩm thành công!
                </Box>;
        },
        duration: 2000,
      })
    }
   
    }
  


  return (
    <Box my={9}>
        <Heading bold fontSize={15} mb={2}> REVIEW </Heading>
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
              <Box p={4} bg={Colors.gray} mt={5} rounded={5} key={index}>
                <Box >
                  <Flex direction="row">
                  <Image source={{uri: `${baseURL}images/users/` + feedback.user.avatar}} 
                  w={10}
                  h={30}
                    resizeMode="contain"
                  alt={feedback.user.username}
                  ml={-1}
                  />
                  <Heading fontSize={15} mt={1} color="#000">{feedback.user.username}</Heading>

                </Flex>
              
                </Box>
                <Box mt={1}>
                <Ratingg value={feedback.rate} />
                </Box>
                
 
              
              <Text mb={2} fontSize={11}>{moment(Number(feedback.createAt)).locale("vi").startOf("second").fromNow() }</Text>
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
                  color:Colors.black
                }}
              >
                Để lại bình luận
              </FormControl.Label>
              <TextArea h={24} w="full" placeholder="Viết đánh giá của bạn về sản phẩm này..." borderWidth={0}
                color={Colors.black}
                bg={Colors.blue2}
                py={4} 
                _focus={{
                  bg: Colors.blue2,
                }}
                value={comment}
                onChangeText={(e) => setComment(e)}
              />
            </FormControl>
            <Buttone bg={Colors.orange} color="#fff" mt={5} onPress={handleReview}>
              ĐÁNH GIÁ
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