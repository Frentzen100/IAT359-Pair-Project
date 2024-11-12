import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { db } from "./firebaseConfig.js";


// Import main screens
import Dashboard from './screens/dashboard/dashboard';
import HealthPlan from './screens/healthPlan/healthPlan';
import OverallHealth from './screens/overallHealth/overallHealth';
import Contact from './screens/contact/contact';
import mainStyles from './stylesheet/mainStyle';
import { tabBarStyles } from './stylesheet/tabStyle';  // Import styles


// Import health plan sub screens
import Outdoor1 from './screens/healthPlan/outdoor1'; 
import Outdoor2 from './screens/healthPlan/outdoor2'; 
import Outdoor3 from './screens/healthPlan/outdoor3'; 
import Outdoor4 from './screens/healthPlan/outdoor4'; 

// Import contact sub screens
import AddContact from './screens/contact/addContact'; 



// Create navigators
const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: tabBarStyles.tabBar,  // Apply tabBar style
        tabBarLabelStyle: tabBarStyles.label,  // Apply label style
      }}
      initialRouteName="HealthPlan"
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
              style={[tabBarStyles.icon]}  
              source={require('./assets/icons/dashboard2.png')}
            />
          ),
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      
      <Tab.Screen
        name="HealthPlan"
        component={HealthPlan}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
            style={[tabBarStyles.icon]}  
            source={require('./assets/icons/healthPlan1.png')}
            />
          ),
          tabBarLabel: 'Health Plan',
          headerShown: false,
        }}
      />
      
      <Tab.Screen
        name="OverallHealth"
        component={OverallHealth}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
            style={[tabBarStyles.icon]}  
            source={require('./assets/icons/overallHealth1.png')}
            />
          ),
          tabBarLabel: 'Overall Health',
          headerShown: false,
        }}
      />
      
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: ({ color }) => (
            <Image
            style={[tabBarStyles.icon]}  
            source={require('./assets/icons/contact1.png')}
            />
          ),
          tabBarLabel: 'Contact',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}



// Main App Component
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={HomeTab} options={{ headerShown: false }} />
        <Stack.Screen name="Outdoor1" component={Outdoor1} />
        <Stack.Screen name="Outdoor2" component={Outdoor2} />
        <Stack.Screen name="Outdoor3" component={Outdoor3} />
        <Stack.Screen name="Outdoor4" component={Outdoor4} />
        <Stack.Screen name="AddContact" component={AddContact} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

//Bottom Navigation --> https://reactnavigation.org/docs/bottom-tab-navigator/
//https://docs.expo.dev/guides/icons/
