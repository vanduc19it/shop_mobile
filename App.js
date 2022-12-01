import { NavigationContainer } from '@react-navigation/native';
import { NativeBaseProvider, StatusBar } from 'native-base';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/Screens/LoginScreen'
import RegisterScreen from './src/Screens/RegisterScreen'
import OrderScreen from './src/Screens/OrderScreen'
import BottomNav from './src/Navigations/BottomNav';
import { Provider } from 'react-redux';
import store from "./src/Redux/store"


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
    <NativeBaseProvider>
      <NavigationContainer>
        <StatusBar hidden={true} />
        <Stack.Navigator 
          initialRouteName="Login" 
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="Login" component={LoginScreen} />
          <Stack.Screen name="Register" component={RegisterScreen} />
          <Stack.Screen name="Order" component={OrderScreen} />
          <Stack.Screen name="Bottom" component={BottomNav} />
        </Stack.Navigator>
      </NavigationContainer>
    </NativeBaseProvider>
     </Provider>
  );
}





