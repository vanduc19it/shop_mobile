import { Center, Heading, Image, Text, View } from 'native-base'
import React from 'react'
import Tabs from '../Components/Profile/Tabs'

function ProfileScreen() {
  return (
    <>
    <Center bg="#66aff6" pt={10} pb={6}>
      <Image source={{uri: "../../assets/shop.png"}} alt="profile"
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
         Phan van phung
       </Heading>
       <Text italic fontSize={10} color="#fff">Joined 11 11 2022</Text>

    </Center>
    <Tabs/>
    </>
  ) 
}

export default ProfileScreen