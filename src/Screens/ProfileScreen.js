import { Center, Heading, Image, Text, View } from 'native-base'
import React from 'react'
import Tabs from '../Components/Profile/Tabs'
import { useDispatch, useSelector } from "react-redux";
import {baseURL} from '../Url'
import moment from "moment";

function ProfileScreen() {

  const dispatch = useDispatch()

  const userLogin = useSelector((state)=> state.userLogin)
  const {userInfo} = userLogin;



  return (
    <>
    <Center bg="#66aff6" pt={10} pb={6}>
      <Image source={{uri: `${baseURL}images/users/` + userInfo.avatar}} alt="profile"
        w={24}
        h={24}
        resizeMode="cover"
      />
      <Heading
       bold 
       fontSize={15} 
       isTruncated
       my={2} 
       color="#fff"
       >
         {userInfo.username}
       </Heading>
       <Text italic fontSize={10} color="#fff">Tham gia {moment(userInfo.createAt).calendar()}</Text>

    </Center>
    <Tabs/>
    </>
  ) 
}

export default ProfileScreen