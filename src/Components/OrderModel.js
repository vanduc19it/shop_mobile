import { Center, HStack, Modal, VStack, Text, Button, Pressable, Image} from 'native-base'
import React, {useState} from 'react'

import Colors from '../Colors'
import Buttone from './Buttone'

const OrdersInfos = [
    {
        title: "Products", 
        price: 1101010,
        color: "black"
    },
    {
        title: "Shipping", 
        price: 1101010,
        color: "black"
    },
    {
        title: "Tax", 
        price: 1101010,
        color: "black"
    },
    {
        title: "Total amount", 
        price: 1101010,
        color: "main"
    }
]

export default function OrderModel() {


  const [showModel, setShowModel] = useState(false)
  return (
    <Center>
        <Buttone
            onPress={() => setShowModel(true)}
            bg={Colors.black}
            color={Colors.white}
            mt={5}
        >
            SHOW PAYMENT & TOTAL
        </Buttone>
        <Modal 
            isOpen={showModel} 
            onClose={() => setShowModel(false)}
            size="lg"
        >
            <Modal.Content maxWidth={350}>
                <Modal.CloseButton/>
                <Modal.Header>DAT HANG</Modal.Header>
                <Modal.Body>
                    <VStack space={7}>
                        {OrdersInfos.map((i,index) => (
                            <HStack key={index} alignItems="center" justifyContent="space-between">
                            <Text fontWeight="medium">{i.title}</Text>
                            <Text color={i.color === "main" ? Colors.main : Colors.black} bold>{i.price}</Text>
                            </HStack>
                        ))}
                       
                    </VStack>
                </Modal.Body>
                <Modal.Footer>
                   
                    <Pressable
                    w="full"
                    justifyContent="center"
                    bg={Colors.main}
                    h={45}
                    rounded={3}
                    onPress={()=> setShowModel(false)}
                >
                    <Image 
                        source={(require("../../assets/shop.png"))} 
                        alt="shipcod" resizeMode="contain"
                        w="full" h={34}
                    />

                </Pressable>
                    <Button 
                        w="full"
                        mt={3}
                        bg={Colors.lightblue}
                        h={45}
                        _text={{
                            color: Colors.white
                        }}
                        onPress={()=> setShowModel(false)}
                        _pressed={{
                            bg: Colors.black
                        }}
                    >
                        PLACE AN ORDER
                    </Button>
                </Modal.Footer>
               
            </Modal.Content>
        </Modal>
    </Center>
  )
}