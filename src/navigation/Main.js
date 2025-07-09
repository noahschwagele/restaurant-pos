import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import Sidebar from './Sidebar';
import PrinterConfigScreen from '../screens/SettingStack/PrinterConfigScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const theme = useTheme();
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(1); // simulate logged in for testing
  const [userDetails, setUserDetails] = React.useState(null);

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userToken');
      setUserToken(null);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  // Simulate loading
  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {userToken == null ? (
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          initialParams={{ setUserToken, setUserDetails }}
        />
      ) : (
        <Stack.Screen
          name="Main"
          component={Sidebar}
          initialParams={{ userToken, userDetails, logout }}
        />
      )}
      <Stack.Screen
        name="PrinterConfigScreen"
        component={PrinterConfigScreen}
        initialParams={{ userToken, userDetails, logout }}
      />
    </Stack.Navigator>
  );
};

export default App;
