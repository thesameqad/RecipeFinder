import React from 'react';
import HomeScreen from './src/screens/Home/HomeScreen';
import AboutScreen from './src/screens/About/AboutScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import mainTheme from './src/styles/mainTheme';

const Tab = createBottomTabNavigator();

/* App Component*/
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = "home";
          } else if (route.name === 'About') {
            iconName = "address-book";
          }

          // You can return any component that you like here!
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: mainTheme.primary,
        inactiveTintColor: 'gray',
      }}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
