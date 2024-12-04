import React from 'react';
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { homeStyle } from '../../stylesheet/authenticationStyles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MyOsteo from '../../assets/icons/myOsteo.svg';
import mainStyles from '../../stylesheet/mainStyle';
import dashboardStyles from '../../stylesheet/dashboardStyle';


export default function HomeScreen({ navigation }) {
  return (
    <View style={homeStyle.container}>
  
      <View style={homeStyle.myOsteoContainer}>
        <MyOsteo width={50} height={50} style={{ transform: [{ translateX: -10 },{ translateY: 125 }, ],}}></MyOsteo>
        <Text style={homeStyle.title}>myOsteo.</Text>
      </View>
      <Text style={homeStyle.paragraph}>
        Your companion for stronger bones {'\n'} and better health.
      </Text>
      <View style={homeStyle.buttonContainer}>
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

/*---------------------------------*/


// const clearAllData = async () => {
//   try {
//     await AsyncStorage.clear();
//     console.log('All AsyncStorage data cleared.');
//   } catch (error) {
//     console.error('Error clearing AsyncStorage data:', error);
//   }
// };

{/* Clear All Data Button */}
{/* <View style={mainStyles.buttonContainer}>
<TouchableOpacity
  style={[mainStyles.button2, dashboardStyles.clearDataButton]}
  onPress={() =>
    Alert.alert(
      'Confirm Reset',
      'Are you sure you want to clear all data? This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'OK', onPress: clearAllData },
      ]
    )
  }
>
  <Text style={mainStyles.buttonText}>Clear All Data</Text>
</TouchableOpacity>
</View> */}