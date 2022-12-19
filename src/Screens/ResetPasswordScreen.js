import { useNavigation } from '@react-navigation/native'
import { Box, Button, Center, FormControl, HStack, Input, ScrollView, Text, VStack} from 'native-base'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Colors from '../Colors'

const ShippingInputs = [
  {
    label: "Nhập mật khẩu cũ", 
    type: "text",
  },
  {
    label: "Nhập mật khẩu mới", 
    type: "text",
  },
  {
    label: "Nhập lại mật khẩu mới", 
    type: "text",
  },
]

function ResetPasswordScreen() {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg="#66aff6" py={5}> 
      <HStack>
        <Center ml={4}>
        <AntDesign name="leftcircleo" size={24} color={Colors.white} onPress={() => navigation.navigate("Profile")} />
        </Center>
     
          <Center w="full"  pt={4} pb={4} pr={10} >
            <Text color={Colors.white} fontSize={18} bold >
              Đặt lại mật khẩu
            </Text>
          </Center>
      </HStack>

      <Box h="full" bg="#fff" px={5}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={6} mt={5}>
            {ShippingInputs.map((i, index)=> (
              <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize: "14px",
                }}
              >
                {i.label}
              </FormControl.Label>
              <Input 
                bold
                borderWidth={0.1} 
                borderColor={Colors.lightblue}
                bg={Colors.lightblue}
                rounded={4}
                py={2}
                fontSize={14}
                type={i.type}
                color="#fff"
                _focus={{
                  bg:Colors.lightblue,
                  borderWidth: 0.2,
                  borderColor: Colors.lightblue,
                  

                }}
              />
            </FormControl>
            ))}
            <Button bg="#66aff6" mt={4} bold color="#fff" onPress={()=> navigation.navigate("Payment")}>Xác nhận</Button>

          </VStack>
        </ScrollView>
      </Box>
    </Box>
  ) 
}

export default ResetPasswordScreen