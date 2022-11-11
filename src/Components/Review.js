import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { Box, CheckIcon, FormControl, Heading, Select, TextArea, VStack } from 'native-base'
import Rating from './Rating'
import Message from './Notifications/Message'
import Buttone from '../Components/Buttone'

export default function Review() {
  const [rating, setRating] = useState('')
  return (
    <Box my={9}>
        <Heading bold fontSize={15} mb={2}> REVIEW</Heading>
        {/* ko cos comment */}
        <Message children={"ko co comment"}/>
        {/* co comment */}
        <Box p={3} bg="#ccc" mt={5} rounded={5}>
            <Heading fontSize={15} color="#000">Phung vip</Heading>
            <Rating value={4}/>
            <Text my={2} fontSize={11}>Dec 12 2022</Text>
            <Message children={"phung vip pro pro pro pro"}/>
        </Box>
        <Box mt={6} >
          <Heading fontSize={15} color="#000" mb={4}> ĐÁNH GIÁ SẢN PHẨM</Heading>
          <VStack>
            <FormControl>
              <FormControl.Label 
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold",
                }} 
              >
                đánh giá
              </FormControl.Label>
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
            <Message 
              color="#fff"
              bg="#000"
              children={
                "XIn dang nhap de binh luan"
              }
            />
          </VStack>
        </Box>
    </Box>
  )
}