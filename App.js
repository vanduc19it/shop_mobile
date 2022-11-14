import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';

import HomeScreen from './src/Screens/HomeScreen';
import PlaceOrderScreen from './src/Screens/PlaceOrderScreen'

export default function App() {
  return (
    <NativeBaseProvider>
      <PlaceOrderScreen/>
      
    </NativeBaseProvider>
  );
}


