import { Box, Button, Center, HStack, ScrollView, Text, View } from 'native-base'
import React from 'react'
import Buttone from '../Components/Buttone'
import CartEmpty from '../Components/CartEmpty'
import CartItems from '../Components/CartItems'

function CartScreen() {
  return (
    <Box flex={1} safeAreaTop bg="#66aff6" >
      <Center w="full" pu={5}>
        <Text color="#000" fontSize={20} bold>
          Gio Hang
        </Text>
      </Center>
      {/* <CartEmpty/> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems/>
        <Center mt={5} >
          <HStack 
            rounded={50} 
            justifyContent="space-between" 
            bg="#fff" 
            shadow={2} 
            w="90%"
            pl={5}
            h={45}
            alignItems="center"
          >
            <Text>Total</Text>
            <Button px={10} h={45} rounded={50} bg="#66aff6" 
              _text= {{
                color: "#fff",
                fontWeight: "semibold",

              }}
              _pressed={{
                bg: "#66aff6"
              }}

            >123 vnd</Button>
          </HStack>
        </Center>
        <Center px={5}>
              <Buttone bg="#000" color="#fff" mt={10}>
                CHECKOUT
              </Buttone>
        </Center>
      </ScrollView>
    </Box>

  )
}

export default CartScreen