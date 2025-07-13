// DriverStack.js
import * as React from 'react';
import { useTheme } from 'react-native-paper';
import { Image } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SaleListScreen from '../screens/SaleStack/SaleListScreen';
import SaleProductScreen from '../screens/SaleStack/SaleProductScreen';





const Stack = createNativeStackNavigator();

const SaleStack = ({ navigation, route }) => {
  const { userToken, userDetails, userRole, logout } = route.params;
  const theme = useTheme();
  return (
    <Stack.Navigator
      initialRouteName='SaleProductScreen'
      screenOptions={{
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        headerBackTitleStyle: {backgroundColor: theme.colors.onSurface}
      }}
    >
      {/* <Stack.Screen 
        name="SaleListScreen" 
        component={SaleListScreen} 
        options={{ headerShown: false, title: 'Sales' }} 
        initialParams={{ userToken, userDetails, logout }}
        /> */}
      <Stack.Screen 
        name="SaleProductScreen" 
        component={SaleProductScreen} 
        options={{ headerShown: true, title: 'Products' }} 
        initialParams={{ userToken, userDetails, logout }}
        />
    </Stack.Navigator>
  );
}

export default SaleStack;
