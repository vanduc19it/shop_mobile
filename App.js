import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';

import HomeScreen from './src/Screens/HomeScreen';
import ProfileScreen from './src/Screens/ProfileScreen'

export default function App() {
  return (
    <NativeBaseProvider>
      <ProfileScreen/>
      
    </NativeBaseProvider>
  );
}


