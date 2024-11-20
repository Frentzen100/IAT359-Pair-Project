import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage'; // Import AsyncStorage
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from 'react-native-vector-icons'; // Importing icon library
import { userInfoStyle } from '../../stylesheet/authenticationStyles';

export default function UserInfoScreen({ navigation }) {
  const [age, setAge] = useState('');
  const [weight, setWeight] = useState('');
  const [feet, setFeet] = useState(''); // Separate state for feet
  const [inches, setInches] = useState(''); // Separate state for inches
  const [height, setHeight] = useState(''); // Single state for cm when selected
  const [gender, setGender] = useState('');  // New state for gender
  const [weightUnit, setWeightUnit] = useState('kg');  // State for weight unit (kg/lbs)
  const [heightUnit, setHeightUnit] = useState('cm');  // State for height unit (cm/ft)

  // Save user data (age, weight, height, gender) to AsyncStorage
  const saveUserInfoToStorage = async (age, weight, height, gender, heightUnit, weightUnit) => {
    try {
      await AsyncStorage.setItem('@user_gender', gender);
      await AsyncStorage.setItem('@user_age', age);
      await AsyncStorage.setItem('@user_weight', weight);
      await AsyncStorage.setItem('@user_height', height);  // Save formatted height
      await AsyncStorage.setItem('@user_gender', gender);
      await AsyncStorage.setItem('@user_height_unit', heightUnit);  // Save the unit for height
      await AsyncStorage.setItem('@user_weight_unit', weightUnit);  // Save the unit for weight
    } catch (e) {
      console.error('Failed to save user info to AsyncStorage:', e);
    }
  };

  const handleNext = () => {
    let formattedHeight = height;

    if (heightUnit === 'ft') {
      // Combine feet and inches into a single string
      formattedHeight = `${feet}'${inches}"`;
    }

    // Save age, weight, height, and gender to AsyncStorage before navigating
    saveUserInfoToStorage(age, weight, formattedHeight, gender, heightUnit, weightUnit);

    // After saving, navigate to the HomeScreen
    navigation.navigate('Home', { screen: 'Dashboard' });
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={userInfoStyle.container}>
      <TouchableOpacity style={userInfoStyle.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={35} color="#001B62" />
      </TouchableOpacity>
        <Text style={userInfoStyle.title}>Profile information</Text>
        
        {/* Gender selection */}
        <Text style={userInfoStyle.label}>Gender</Text>
        <View style={userInfoStyle.genderContainer}>
          <TouchableOpacity
            style={[userInfoStyle.genderButton, gender === 'Male' && userInfoStyle.selectedButton]}
            onPress={() => setGender('Male')}
          >
            <MaterialIcons name="male" size={30} color={gender === 'Male' ? '#fff' : '#8495C0'} />
            <Text
            style={[
              gender === 'Male'
                ? userInfoStyle.buttonTextSelected
                : userInfoStyle.buttonTextDefault,
            ]}
          >
            Male
          </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[userInfoStyle.genderButton, gender === 'Female' && userInfoStyle.selectedButton]}
            onPress={() => setGender('Female')}
          >
            <MaterialIcons name="female" size={30} color={gender === 'Female' ? '#fff' : '#8495C0'} />
            <Text
            style={[
              gender === 'Female'
                ? userInfoStyle.buttonTextSelected
                : userInfoStyle.buttonTextDefault,
            ]}
          >
            Female
          </Text>
          </TouchableOpacity>
        </View>

        {/* Age input */}
        <Text style={userInfoStyle.label}>Age</Text>
        <TextInput
          style={userInfoStyle.input}
          placeholder="Age"
          value={age}
          onChangeText={setAge}
          keyboardType="numeric"
        />
        
        {/* Weight input with unit buttons */}
        <Text style={userInfoStyle.label}>Weight</Text>
        <View style={userInfoStyle.inputContainer}>
          <TextInput
            style={[userInfoStyle.input, userInfoStyle.weightInput]}
            placeholder={`Weight (${weightUnit})`}
            value={weight}
            onChangeText={setWeight}
            keyboardType="numeric"
          />
          <View style={userInfoStyle.unitButtons}>
            <TouchableOpacity
              style={[userInfoStyle.unitButton, weightUnit === 'kg' && userInfoStyle.selectedButton]}
              onPress={() => setWeightUnit('kg')}
            >
              <Text
              style={[
                weightUnit === 'kg'
                  ? userInfoStyle.buttonTextSelected
                  : userInfoStyle.buttonTextDefault,
              ]}
            >
              kg
            </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[userInfoStyle.unitButton, weightUnit === 'lbs' && userInfoStyle.selectedButton]}
              onPress={() => setWeightUnit('lbs')}
            >
              <Text
              style={[
                weightUnit === 'lbs'
                  ? userInfoStyle.buttonTextSelected
                  : userInfoStyle.buttonTextDefault,
              ]}
            >
              lbs
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        
        {/* Height input with dynamic units */}
        <Text style={userInfoStyle.label}>Height</Text>
        {heightUnit === 'cm' ? (
          <View style={userInfoStyle.inputContainer}>
            <TextInput
              style={[userInfoStyle.input, userInfoStyle.heightInput]}
              placeholder="Height (cm)"
              value={height}
              onChangeText={setHeight}
              keyboardType="numeric"
            />
            <View style={userInfoStyle.unitButtons}>
              <TouchableOpacity
                style={[userInfoStyle.unitButton, heightUnit === 'cm' && userInfoStyle.selectedButton]}
                onPress={() => {
                  setHeightUnit('cm');
                  setFeet('');
                  setInches('');
                }}
              >
                <Text
                style={[
                  weightUnit === 'cm'
                    ? userInfoStyle.buttonTextSelected
                    : userInfoStyle.buttonTextDefault,
                ]}
              >
                cm
              </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[userInfoStyle.unitButton, heightUnit === 'ft' && userInfoStyle.selectedButton]}
                onPress={() => {
                  setHeightUnit('ft');
                  setHeight(''); // Clear cm input if switching to ft
                }}
              >
                <Text
                style={[
                  weightUnit === 'ft'
                    ? userInfoStyle.buttonTextSelected
                    : userInfoStyle.buttonTextDefault,
                ]}
              >
                ft
              </Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={userInfoStyle.inputContainer}>
            <TextInput
              style={[userInfoStyle.input, userInfoStyle.heightInput]}
              placeholder="Feet"
              value={feet}
              onChangeText={setFeet}
              keyboardType="numeric"
            />
            <TextInput
              style={[userInfoStyle.input, userInfoStyle.heightInput]}
              placeholder="Inches"
              value={inches}
              onChangeText={setInches}
              keyboardType="numeric"
            />
            <View style={userInfoStyle.unitButtons}>
              <TouchableOpacity
                style={[userInfoStyle.unitButton, heightUnit === 'cm' && userInfoStyle.selectedButton]}
                onPress={() => {
                  setHeightUnit('cm');
                  setFeet('');
                  setInches('');
                }}
              >
                <Text style={userInfoStyle.buttonText}>cm</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[userInfoStyle.unitButton, heightUnit === 'ft' && userInfoStyle.selectedButton]}
                onPress={() => {
                  setHeightUnit('ft');
                  setHeight(''); // Clear cm input if switching to ft
                }}
              >
                <Text style={userInfoStyle.buttonText}>ft</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* Replacing the Button with TouchableOpacity */}
        <TouchableOpacity
          style={userInfoStyle.button} 
          onPress={handleNext}
        >
          <Text style={userInfoStyle.buttonText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </TouchableWithoutFeedback>
  );
}
