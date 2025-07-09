// DriverStack.js
import * as React from 'react';
import { useTheme } from 'react-native-paper';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from '../screens/HomeStack/HomeScreen';
import SettingLandingScreen from '../screens/SettingStack/SettingLandingScreen';
import PrinterConfigScreen from '../screens/SettingStack/PrinterConfigScreen';




const Stack = createNativeStackNavigator();

const SettingStack = ({ navigation, route }) => {
  const { userToken, userDetails, userRole, logout } = route.params;
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName='PrinterConfigScreen'
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleStyle: {backgroundColor: theme.colors.onSurface}
      }}
    >
      {/* <Stack.Screen 
        name="SettingLandingScreen" 
        component={SettingLandingScreen} 
        options={{ headerShown: false, title: 'Home' }} 
        initialParams={{ userToken, userDetails, logout }}
        /> */}
      <Stack.Screen 
        name="PrinterConfigScreen" 
        component={PrinterConfigScreen} 
        options={{ headerShown: false, title: 'Prep Stations configuration' }} 
        initialParams={{ userToken, userDetails, logout }}
        />
    </Stack.Navigator>
  );
}

export default SettingStack;
