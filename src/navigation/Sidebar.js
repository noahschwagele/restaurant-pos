import * as React from 'react';
import {  View } from 'react-native';
import { Text,useTheme } from 'react-native-paper';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

// Import stacks
import HomeStack from './HomeStack';
import TableMapStack from './TableMapStack';
import MenuListStack from './MenuListStack';
import OrderStack from './OrderStack';
import PaymentStack from './PaymentStack';
import EmployeeStack from './EmployeeStack';
import ReportStack from './ReportStack';
import SettingStack from './SettingStack';
import SettingLandingScreen from '../screens/SettingStack/SettingLandingScreen';

const Drawer = createDrawerNavigator();

export default function Sidebar({ userToken, userDetails, logout }) {
  const theme = useTheme();

  return (
    <Drawer.Navigator
      initialRouteName="Settings"
      screenOptions={{
        headerShown: false,
        drawerType: 'permanent',
        drawerStyle: {
          width: 200,
          backgroundColor: theme.colors.neutral100,
        },
        drawerActiveBackgroundColor: theme.colors.neutral200,
        drawerActiveTintColor: theme.colors.neutral900,
        drawerInactiveTintColor: theme.colors.neutral700,
        drawerItemStyle: {
          borderRadius: 100,
          marginVertical: 4,
        }
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} theme={theme} />}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        initialParams={{ userToken, userDetails, logout }}
      />
      <Drawer.Screen
        name="TableMap"
        component={TableMapStack}
        initialParams={{ userToken, userDetails, logout }}
      />
      <Drawer.Screen
        name="MenuList"
        component={MenuListStack}
        initialParams={{ userToken, userDetails, logout }}
      />
      <Drawer.Screen
        name="Orders"
        component={OrderStack}
        initialParams={{ userToken, userDetails, logout }}
      />
      <Drawer.Screen
        name="Payments"
        component={PaymentStack}
        initialParams={{ userToken, userDetails, logout }}
      />
      <Drawer.Screen
        name="Employees"
        component={EmployeeStack}
        initialParams={{ userToken, userDetails, logout }}
      />
      <Drawer.Screen
        name="Reports"
        component={ReportStack}
        initialParams={{ userToken, userDetails, logout }}
      />
      <Drawer.Screen
        name="Settings"
        component={SettingLandingScreen}
        initialParams={{ userToken, userDetails, logout }}
      />
    </Drawer.Navigator>
  );
}

function CustomDrawerContent({ navigation, state, descriptors, theme }) {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        // height: '100%',
        justifyContent: 'center',
        backgroundColor: 'white',
        // paddingVertical: 20,
      }}
    >
      {state.routes.map((route, index) => {
        const isFocused = state.index === index;

        return (
          <DrawerItem
            key={route.key}
            label={() => (
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                }}
              >
                <MaterialCommunityIcons
                  name={getIconName(route.name)}
                  size={18}
                  color={isFocused ? theme.colors.neutral900 : theme.colors.neutral600}
                  style={{ marginRight: 12 }}
                />
                <Text
                  style={{
                    color: isFocused ? theme.colors.neutral900 : theme.colors.neutral700,
                    fontSize: 14,
                  }}
                >
                  {route.name}
                </Text>
              </View>
            )}
            focused={isFocused}
            activeBackgroundColor={theme.colors.neutral50}
            inactiveTintColor={theme.colors.neutral700}
            activeTintColor={theme.colors.neutral900}
            onPress={() => navigation.navigate(route.name)}
            style={{
              borderRadius: 1000,
              marginVertical: 4,
              borderWidth: isFocused ? 1 : 0,
              borderColor: isFocused ? theme.colors.neutral300 : 'transparent',
              // justifyContent: 'center',
              // alignItems: 'center',
            }}
          />
        );
      })}
    </DrawerContentScrollView>
  );
}

function getIconName(routeName) {
  switch (routeName) {
    case 'Home':
      return 'home';
    case 'TableMap':
      return 'table';
    case 'MenuList':
      return 'menu';
    case 'Orders':
      return 'bell';
    case 'Payments':
      return 'cash';
    case 'Employees':
      return 'account-group';
    case 'Reports':
      return 'chart-bar';
    case 'Settings':
      return 'cog';
    default:
      return 'circle';
  }
}
