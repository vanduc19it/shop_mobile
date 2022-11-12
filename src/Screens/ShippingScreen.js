import { Box, Center, FormControl, Input, ScrollView, Text, VStack} from 'native-base'
import React from 'react'
import Buttone from '../Components/Buttone'
const ShippingInputs = [
  {
    label: "ENTER CITY", 
    type: "text",
  },
  {
    label: "ENTER PHONE", 
    type: "text",
  },
  {
    label: "ENTER ADDRESS", 
    type: "text",
  },
  {
    label: "MESSAGE", 
    type: "text",
  }
]

function ShippingScreen() {
  return (
    <Box flex={1} safeAreaTop bg="#66aff6" py={5}> 
      <Center pb={15}>
        <Text color="#fff" fontSize={14} bold>
          DELIVERY ADDRESS
        </Text>
      </Center>
      <Box h="full" bg="#fff" px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((i, index)=> (
              <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "12px",
                  fontWeight: "bold"
                }}
              >
                {i.label}
              </FormControl.Label>
              <Input 
                borderWidth={0.2} 
                borderColor="#000"
                bg="#66aff6"
                py={4}
                type={i.type}
                color="#fff"
                _focus={{
                  bg:"#66aff6",
                  borderWidth: 1,
                  borderColor: "#000",


                }}
              />
            </FormControl>
            ))}
            <Buttone bg="#66aff6" color="#fff">CONTINUE</Buttone>

          </VStack>
        </ScrollView>
      </Box>
    </Box>
  ) 
}

export default ShippingScreen