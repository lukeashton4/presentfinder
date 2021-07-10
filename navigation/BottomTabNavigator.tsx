/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { useHistory } from "react-router-dom";

import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/Home';
import TabTwoScreen from '../screens/Search';
import TabThreeScreen from '../screens/Saved';
import TabFourScreen from '../screens/Purchased';
import TabFiveScreen from '../screens/More';
import ProfileScreen from '../screens/Profile';
import SettingsScreen from '../screens/Settings';
import SearchResultsScreen from '../screens/SearchResults';
import ItemDetailsScreen from '../screens/ItemDetails';
import { BottomTabParamList, TabOneParamList, TabTwoParamList, TabThreeParamList, TabFourParamList, TabFiveParamList } from '../types';

const BottomTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator({route}) {
  const colorScheme = useColorScheme();
  const { user, accessToken } = route.params;
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      tabBarOptions={{ activeTintColor: Colors[colorScheme].tint }}>
      <BottomTab.Screen
        name="Home"
        component={TabOneNavigator}
        initialParams={{user: user, accessToken: accessToken}}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Search"
        component={TabTwoNavigator}
        initialParams={{user: user, accessToken: accessToken}}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Saved"
        component={TabThreeNavigator}
        initialParams={{user: user, accessToken: accessToken}}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="heart" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="Purchased"
        component={TabFourNavigator}
        initialParams={{user: user, accessToken: accessToken}}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="list" color={color} />,
        }}
      />
      <BottomTab.Screen
        name="More"
        component={TabFiveNavigator}
        initialParams={{user: user, accessToken: accessToken}}
        options={{
          tabBarIcon: ({ color }) => <TabBarIcon name="ellipsis-horizontal-outline" color={color} />,
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator({navigation, route}) {
  const { user, accessToken } = route.params;
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="Home"
        component={TabOneScreen}
        initialParams={{user: user, accessToken: accessToken}}
      />
      <TabOneStack.Screen name="Profile" component={ProfileScreen}/>
      <TabOneStack.Screen name="Settings" component={SettingsScreen}/>
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator({route}) {
  const { user, accessToken } = route.params;
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="Search"
        component={TabTwoScreen}
        options={{ headerTitle: 'Search' }}
        initialParams={{user: user, accessToken: accessToken}}
      />
      <TabTwoStack.Screen name="Profile" component={ProfileScreen}/>
      <TabTwoStack.Screen name="Settings" component={SettingsScreen}/>
      <TabTwoStack.Screen name="SearchResults" component={SearchResultsScreen} options={{ headerTitle: 'Search Results' }}/>
      <TabTwoStack.Screen name="ItemDetails" component={ItemDetailsScreen} options={{ headerTitle: 'Item Details' }}/>
      <TabTwoStack.Screen
        name="Home"
        component={TabOneScreen}
      />
    </TabTwoStack.Navigator>
  );
}

const TabThreeStack = createStackNavigator<TabThreeParamList>();

function TabThreeNavigator({route}) {
  const { user, accessToken } = route.params;
  return (
    <TabThreeStack.Navigator>
      <TabThreeStack.Screen
        name="Saved"
        component={TabThreeScreen}
        options={{ headerTitle: 'Saved' }}
        initialParams={{user: user, accessToken: accessToken}}
      />
      <TabThreeStack.Screen name="Profile" component={ProfileScreen}/>
      <TabThreeStack.Screen name="Settings" component={SettingsScreen}/>
    </TabThreeStack.Navigator>
  );
}

const TabFourStack = createStackNavigator<TabFourParamList>();

function TabFourNavigator({route}) {
  const { user, accessToken } = route.params;
  return (
    <TabFourStack.Navigator>
      <TabFourStack.Screen
        name="Purchased"
        component={TabFourScreen}
        options={{ headerTitle: 'Purchased' }}
        initialParams={{user: user, accessToken: accessToken}}
      />
      <TabFourStack.Screen name="Profile" component={ProfileScreen}/>
      <TabFourStack.Screen name="Settings" component={SettingsScreen}/>
    </TabFourStack.Navigator>
  );
}

const TabFiveStack = createStackNavigator<TabFiveParamList>();

function TabFiveNavigator({route}) {
  const { user, accessToken } = route.params;
  return (
    <TabFiveStack.Navigator>
      <TabFiveStack.Screen
        name="More"
        component={TabFiveScreen}
        options={{ headerTitle: 'More' }}
        initialParams={{user: user, accessToken: accessToken}}
      />
      <TabFiveStack.Screen name="Profile" component={ProfileScreen}/>
      <TabFiveStack.Screen name="Settings" component={SettingsScreen}/>
    </TabFiveStack.Navigator>
  );
}