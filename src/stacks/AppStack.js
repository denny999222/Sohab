// SETUP
import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

// UI
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '@colors';

// SCREENS //
// App
// Tabs
import Home from '@screens/Home';
import Wallet from '@screens/Wallet';
import Groups from '@screens/Groups';

const Tab = createMaterialBottomTabNavigator();

MaterialCommunityIcons.loadFont();

const AppStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      activeColor={colors.quaternary}
      inactiveColor={colors.primary}
      barStyle={{backgroundColor: colors.background, shadowOpacity: 0}}>
      <Tab.Screen
        name="HomeTab"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused, color}) => {
            return (
              <MaterialCommunityIcons
                name="home"
                color={focused ? colors.quaternary : colors.primary}
                size={26}
              />
            );
          },
        }}
      />
      <Tab.Screen
        name="WalletTab"
        component={Wallet}
        options={{
          tabBarLabel: 'Wallet',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name="wallet"
              color={focused ? colors.quaternary : colors.primary}
              size={26}
            />
          ),
        }}
      />
      <Tab.Screen
        name="GroupsTab"
        component={Groups}
        options={{
          tabBarLabel: 'Friends',
          tabBarIcon: ({focused, color}) => (
            <MaterialCommunityIcons
              name="account-multiple"
              color={focused ? colors.quaternary : colors.primary}
              size={26}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default AppStack;
