import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Import screens
import Dashboard from './screens/dashboard/dashboard';
import HealthPlan from './screens/healthPlan/healthPlan';
import OverallHealth from './screens/overallHealth/overallHealth';
import Contact from './screens/contact/contact';
import AddContact from './screens/contact/addContact'; 
import AddContactPhoto from './screens/contact/addContactPhoto'; 
import Outdoor1 from './screens/healthPlan/outdoor1'; 
import Outdoor2 from './screens/healthPlan/outdoor2'; 
import Outdoor3 from './screens/healthPlan/outdoor3'; 
import Outdoor4 from './screens/healthPlan/outdoor4'; 
import AddMedication from './screens/healthPlan/addMedication'; 
import AddMedicationPhoto from './screens/healthPlan/addMedicationPhoto'; 

// Auth Screens
import WelcomeScreen from './screens/auth_screens/home';
import LogInScreen from './screens/auth_screens/logIn';
import CreateAccountScreen from './screens/auth_screens/createaccount';
import UserInfoScreen from './screens/auth_screens/userInfo';

// Import styles
import { tabBarStyles } from './stylesheet/tabStyle'; 

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Utility for tabBarIcon
const getTabBarIcon = (iconSource) => () => (
  <Image style={tabBarStyles.icon} source={iconSource} />
);

function HomeTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: tabBarStyles.tabBar,
        tabBarLabelStyle: tabBarStyles.label,
      }}
      initialRouteName="HealthPlan"
    >
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarIcon: getTabBarIcon(require('./assets/icons/dashboard2.png')),
          tabBarLabel: 'Home',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="HealthPlan"
        component={HealthPlan}
        options={{
          tabBarIcon: getTabBarIcon(require('./assets/icons/healthPlan1.png')),
          tabBarLabel: 'Guides',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="OverallHealth"
        component={OverallHealth}
        options={{
          tabBarIcon: getTabBarIcon(require('./assets/icons/overallHealth1.png')),
          tabBarLabel: 'Insight',
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={Contact}
        options={{
          tabBarIcon: getTabBarIcon(require('./assets/icons/contact1.png')),
          tabBarLabel: 'Contacts',
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    

    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{ headerShown: false }}> 
          <Stack.Screen name="Home" component={HomeTab} />
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="LogIn" component={LogInScreen} />
          <Stack.Screen name="CreateAccount" component={CreateAccountScreen} />
          <Stack.Screen name="UserInfo" component={UserInfoScreen} />
          <Stack.Screen name="Outdoor1" component={Outdoor1} />
          <Stack.Screen name="Outdoor2" component={Outdoor2} />
          <Stack.Screen name="Outdoor3" component={Outdoor3} />
          <Stack.Screen name="Outdoor4" component={Outdoor4} />
          <Stack.Screen name="AddContact" component={AddContact} />
          <Stack.Screen name="AddContactPhoto" component={AddContactPhoto} />
          <Stack.Screen name="AddMedication" component={AddMedication} />
          <Stack.Screen name="AddMedicationPhoto" component={AddMedicationPhoto} />
        </Stack.Navigator>
      </NavigationContainer>


    </SafeAreaProvider>
  );
}
//https://docs.expo.dev/guides/icons/
