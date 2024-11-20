import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { homeStyle } from '../../stylesheet/authenticationStyles';


export default function HomeScreen({ navigation }) {
  return (
    <View style={homeStyle.container}>
      <Text style={homeStyle.title}>myOsteo.</Text>
      <Text style={homeStyle.paragraph}>
        Your companion for stronger bones {'\n'} and better health.
      </Text>
      {/* Container for the buttons */}
      <View style={homeStyle.buttonContainer}>
        {/* Custom styled buttons using TouchableOpacity */}
        <TouchableOpacity 
          style={homeStyle.button} 
          onPress={() => navigation.navigate('LogIn')}
        >
          <Text style={homeStyle.buttonText}>Log In</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={homeStyle.button} 
          onPress={() => navigation.navigate('CreateAccount')}
        >
          <Text style={homeStyle.buttonText}>Create New Account</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
