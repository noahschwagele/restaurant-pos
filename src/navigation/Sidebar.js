import React from 'react';
import { Dimensions, View } from 'react-native';
import { IconButton, Text, useTheme } from 'react-native-paper';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { DrawerActions, useNavigation } from '@react-navigation/native';
import * as ScreenOrientation from 'expo-screen-orientation';

// Import stacks
import HomeStack from './HomeStack';
import PaymentStack from './PaymentStack';
import EmployeeStack from './EmployeeStack';
import ReportStack from './ReportStack';
import SaleStack from './SaleStack';
import SettingLandingScreen from '../screens/SettingStack/SettingLandingScreen';
import SaleListScreen from '../screens/SaleStack/SaleListScreen';

const Drawer = createDrawerNavigator();

export default function Sidebar({ userToken, userDetails, logout }) {
  const theme = useTheme();
  const [isPermanent, setIsPermanent] = React.useState(true);
  const [orientation, setOrientation] = React.useState('portrait');
  const { width } = Dimensions.get('screen');
  const navigation = useNavigation();

  React.useEffect(() => {
    const updateOrientation = async () => {
      const currentOrientation = await ScreenOrientation.getOrientationAsync();
      const isLandscape =
        currentOrientation === ScreenOrientation.Orientation.LANDSCAPE_LEFT ||
        currentOrientation === ScreenOrientation.Orientation.LANDSCAPE_RIGHT;

      setOrientation(isLandscape ? 'landscape' : 'portrait');

      // Adjust permanent drawer based on width and orientation
      setIsPermanent(width >= 1024 && isLandscape);
    };

    // Initial check
    updateOrientation();

    // Listen for orientation changes
    const subscription = ScreenOrientation.addOrientationChangeListener(() => {
      updateOrientation();
    });

    // Clean up listener
    return () => {
      ScreenOrientation.removeOrientationChangeListener(subscription);
    };
  }, [width]);

  return (
    <Drawer.Navigator
      defaultStatus={isPermanent ? 'open' : 'closed'}
      initialRouteName="Home"
      screenOptions={({ navigation }) => ({
        headerShown: true,
        drawerType: isPermanent ? 'permanent' : 'slide',
        drawerStyle: {
          backgroundColor: theme.colors.neutral00,
          width: 240,
        },
        headerStyle: {
          backgroundColor: theme.colors.neutral00,
          shadowColor: 'transparent',
          borderRadius: isPermanent ? 15 : 0,
        },
        headerLeft: () =>
          !isPermanent ? (
            <IconButton
              icon="menu"
              onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
              accessibilityLabel="Open navigation drawer"
            />
          ) : null,
        drawerActiveBackgroundColor: theme.colors.neutral200,
        drawerActiveTintColor: theme.colors.neutral900,
        drawerInactiveTintColor: theme.colors.neutral700,
        drawerItemStyle: {
          borderRadius: 100,
          marginVertical: 4,
        },
      })}
      drawerContent={(props) => (
        <CustomDrawerContent {...props} theme={theme} isPermanent={isPermanent} />
      )}
    >
      <Drawer.Screen
        name="Home"
        component={HomeStack}
        initialParams={{ userToken, userDetails, logout }}
      />
      <Drawer.Screen
        name="Sales"
        component={SaleListScreen}
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

function CustomDrawerContent({ navigation, state, theme, isPermanent }) {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        flex: 1,
        height: '100%',
        justifyContent: isPermanent ? 'center' : 'flex-start',
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 20,
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
                  color={
                    isFocused ? theme.colors.neutral900 : theme.colors.neutral600
                  }
                  style={{ marginRight: 12 }}
                />
                <Text
                  style={{
                    color: isFocused
                      ? theme.colors.neutral900
                      : theme.colors.neutral700,
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
    case 'Sales':
      return 'cart';
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
