import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
//local imports
import {
  HomeScreen,
  AssetsScreen,
  NewsScreen,
  AccountsScreen,
  CoinScreen,
  InviteScreen,
  Transact,
  Prices,
  Login, 
  Verification
} from '../screens';
import { screenWithoutHeader, bottomNavigationOptions, screenWithHeader } from './options';
import { Colors } from '../enums';
import { StyleSheet } from 'react-native';
// HomeStack represents 4 screens as stack navigator: Home, Coin, Asssets, Stories
/**
 * feeds/posts stack navigation
 */
const HomeStack = createStackNavigator();
const HomeStackScreens = () => (
  <HomeStack.Navigator initialRouteName="Home">
    <HomeStack.Screen
      name="Home"
      component={HomeScreen}
      options={props =>
        screenWithHeader({
          ...props,
          headerStyle: styles.header,
          headerTintColor: '#fff',
        })
      }
    />
    <HomeStack.Screen name="Coin" component={CoinScreen} options={props => screenWithoutHeader(props)} />
    <HomeStack.Screen name="Transact" component={Transact} options={props => screenWithoutHeader(props)} />
    <HomeStack.Screen name="Assets" component={AssetsScreen} options={props => screenWithoutHeader(props)} />
    <HomeStack.Screen name="Stories" component={NewsScreen} options={props => screenWithoutHeader(props)} />
  </HomeStack.Navigator>
);

// AccountsStack represents Accounts Screen
const AccountsStack = createStackNavigator();
const AccountsStackScreens = () => (
  <AccountsStack.Navigator initialRouteName="Accounts">
    <AccountsStack.Screen
      name="Accounts"
      component={AccountsScreen}
      options={props =>
        screenWithHeader(
          {
            ...props,
            headerStyle: styles.header,
            headerTintColor: '#fff',
          },
          'Portfolio',
        )
      }
    />
    <AccountsStack.Screen name="Coin" component={CoinScreen} options={props => screenWithoutHeader(props)} />
    <AccountsStack.Screen name="Transact" component={Transact} options={props => screenWithoutHeader(props)} />
  </AccountsStack.Navigator>
);

// transact represents transact operation Screen
const OpStack = createStackNavigator();
const OpStackScreens = () => (
  <OpStack.Navigator initialRouteName="Transact">
    <OpStack.Screen name="Transact" component={Transact} options={props => screenWithoutHeader(props)} />
  </OpStack.Navigator>
);
//prices Stack
const PricesStack = createStackNavigator();
const PricesStackScreens = () => (
  <PricesStack.Navigator initialRouteName="Prices">
    <PricesStack.Screen
      name="Prices"
      component={Prices}
      options={props =>
        screenWithHeader({
          ...props,
          headerStyle: styles.header,
          headerTintColor: '#fff',
        })
      }
    />
    <PricesStack.Screen name="Coin" component={CoinScreen} options={props => screenWithoutHeader(props)} />
    <PricesStack.Screen name="Transact" component={Transact} options={props => screenWithoutHeader(props)} />
  </PricesStack.Navigator>
);
//Invite Stack
// transact represents transact operation Screen
const InviteStack = createStackNavigator();
const InviteStackScreens = () => (
  <InviteStack.Navigator initialRouteName="Invite">
    <InviteStack.Screen name="Invite" component={InviteScreen} options={props => screenWithoutHeader(props)} />
  </InviteStack.Navigator>
);

//Auth Stack
// transact represents transact operation Screen
const AuthStack = createStackNavigator();
const AuthStackScreens = () => (
  <AuthStack.Navigator initialRouteName="Login">
    <InviteStack.Screen name="Login" component={Login} />
    <InviteStack.Screen name="Verification" component={Verification} />
  </AuthStack.Navigator>
);




/**
 * tab navigation
 */
const Tabs = createMaterialBottomTabNavigator();

const TabsNavigator = () => (
  <Tabs.Navigator
    barStyle={{ backgroundColor: '#F8F8F8' }}
    activeColor={Colors.trueBlue}
    inactiveColor={Colors.gray}
    initialRouteName="Login">
    {/* <Tabs.Screen
      name="Login"
      component={AuthStackScreens}
      options={props => bottomNavigationOptions('home', 'Feather', 'Home')}
    /> */}
    <Tabs.Screen
      name="Home"
      component={HomeStackScreens}
      options={props => bottomNavigationOptions('home', 'Feather', 'Home')}
    />
    <Tabs.Screen
      name="Accounts"
      component={AccountsStackScreens}
      options={props => bottomNavigationOptions('pie-chart', 'Feather', 'Portfolio')}
    />
    <Tabs.Screen
      name="Transact"
      component={OpStackScreens}
      options={props => bottomNavigationOptions('swap', 'AntDesign', ' ', true)}
    />
    <Tabs.Screen
      name="Prices"
      component={PricesStackScreens}
      options={props => bottomNavigationOptions('bar-chart-2', 'Feather', 'Prices')}
    />
    <Tabs.Screen
      name="Invite"
      component={InviteStackScreens}
      options={props => bottomNavigationOptions('gift', 'Octicons', 'Invite')}
    />
  </Tabs.Navigator>
);

// render navigations
const Navigator: React.FC<React.ReactNode> = props => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default Navigator;

const styles = StyleSheet.create({
  header: {
    backgroundColor: Colors.trueBlue,
    borderWidth: 0,
    elevation: 0,
    shadowColor: Colors.trueBlue,
  },
});
