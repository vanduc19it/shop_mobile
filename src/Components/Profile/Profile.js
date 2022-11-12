
import React from 'react'
import { Box, FormControl, Input, ScrollView, VStack } from 'native-base'
import Buttone from '../../Components/Buttone'

const Inputs = [
  {
    label: "USERNAME", 
    type: "text",
  },
  {
    label: "EMAIL", 
    type: "text",
  },
  {
    label: "PASSWORD", 
    type: "password",
  }
]

export default function Profile() {
  return (
    <Box h="full" bg="#fff" px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {
            Inputs.map((i, index) => (
              <FormControl key={index}>
                <FormControl.Label 
                  _text={{
                    fontSize: "12px",
                    fontWeight: "bold",
                  }}
                >
                  {i.label}
                </FormControl.Label>
                <Input 
                  borderWidth={0.2} 
                  bg="#66aff6" 
                  borderColor="#ccc"
                  py={4} 
                  type={i.type}
                  color="#fff" 
                  fontSize={15}
                  _focus={{
                    bg: "#66aff6",
                    borderColor: "#000",
                    borderWidth: 1,
                }}
                />
            </FormControl>
            ))  
          }
          <Buttone bg="#66aff6" color="#fff">UPDATE PROFILE</Buttone>
        </VStack>
      </ScrollView>
    </Box>
  )
}