import { View, Text } from 'react-native'
import React from 'react'
import { Center } from 'native-base'

export default function Message({children}) {
  return (
    <Center bg="#fff" p={4} rounded={5}>
        <Text color="#000" fontSize={12}>{children}</Text>
    </Center>
  )
}