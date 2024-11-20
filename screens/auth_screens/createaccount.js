import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Modal, ScrollView } from 'react-native';

import { createUserWithEmailAndPassword } from 'firebase/auth';
import { firebase_auth } from '../../firebaseConfig';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAccountStyle } from '../../stylesheet/authenticationStyles';
import { confirmationStyle } from '../../stylesheet/authenticationStyles';
import { Ionicons } from '@expo/vector-icons';

export default function SignUpScreen({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [termsModalVisible, setTermsModalVisible] = useState(false);
  const [privacyModalVisible, setPrivacyModalVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const saveNameToStorage = async (name) => {
    try {
      await AsyncStorage.setItem('@user_name', name);
    } catch (e) {
      console.error('Failed to save the name to AsyncStorage:', e);
    }
  };

  const handleSignUp = async () => {
    if (!email || !password) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(firebase_auth, email, password);
      const user = userCredential.user;

      console.log('User created:', user);

      await saveNameToStorage(name);

      // Show confirmation modal
      setModalVisible(true);
    } catch (error) {
      console.error('Error during sign-up:', error);
      alert(error.message);
    }
  };

  const handleContinue = () => {
    setModalVisible(false);
    navigation.navigate('UserInfo'); // Navigate to UserInfo after closing the modal
  };

  return (
    <View style={createAccountStyle.container}>
      <TouchableOpacity style={createAccountStyle.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={35} color="#001B62" />
      </TouchableOpacity>

      <Text style={createAccountStyle.title}>Welcome!</Text>

      <View style={createAccountStyle.inputContainer}>
        <Text style={createAccountStyle.label}>First Name</Text>
        <TextInput
          style={createAccountStyle.input}
          placeholder="Enter your name here"
          value={name}
          onChangeText={setName}
        />
      </View>

      <View style={createAccountStyle.inputContainer}>
        <Text style={createAccountStyle.label}>Email</Text>
        <TextInput
          style={createAccountStyle.input}
          placeholder="Enter your email here"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
      </View>

      <View style={createAccountStyle.inputContainer}>
        <Text style={createAccountStyle.label}>Password</Text>
        <View style={createAccountStyle.passwordContainer}>
          <TextInput
            style={createAccountStyle.passwordInput}
            placeholder="Enter your password here"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <Ionicons name={!showPassword ? "eye-off" : "eye"} size={24} color="#001B62" />
          </TouchableOpacity>
        </View>
      </View>

      <TouchableOpacity style={createAccountStyle.button} onPress={handleSignUp}>
        <Text style={createAccountStyle.buttonText}>Create Account</Text>
      </TouchableOpacity>

      {/* Terms and Privacy Section */}
      <View style={createAccountStyle.termsContainer}>
        <Text style={createAccountStyle.agreementText}>
          By creating your account, you agree to the{' '}
          <Text
            style={createAccountStyle.linkText}
            onPress={() => setTermsModalVisible(true)}
          >
            Terms of Services
          </Text>{' '}
          and{' '}
          <Text
            style={createAccountStyle.linkText}
            onPress={() => setPrivacyModalVisible(true)}
          >
            Privacy Policy
          </Text>.
        </Text>
      </View>

      {/* Terms of Services Modal */}
      <Modal
        visible={termsModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setTermsModalVisible(false)}
      >
        <View style={createAccountStyle.modalContainer}>
          <ScrollView style={createAccountStyle.modalContent}>
            <Text style={createAccountStyle.modalTitle}>Terms of Services</Text>
            <Text style={createAccountStyle.paragraph}>
              {/* Replace this with your Terms of Services content */}
              This is where the Terms of Services content goes.
            </Text>
            <TouchableOpacity
              style={createAccountStyle.closeButton}
              onPress={() => setTermsModalVisible(false)}
            >
              <Text style={createAccountStyle.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal
        visible={privacyModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setPrivacyModalVisible(false)}
      >
        <View style={createAccountStyle.modalContainer}>
          <ScrollView style={createAccountStyle.modalContent}>
            <Text style={createAccountStyle.modalTitle}>Privacy Policy</Text>
            <Text style={createAccountStyle.modalParagraph}>
              {/* Replace this with your Terms of Services content */}
              This is where the Privacy Policy content goes.
            </Text>
            <TouchableOpacity
              style={createAccountStyle.closeButton}
              onPress={() => setPrivacyModalVisible(false)}
            >
              <Text style={createAccountStyle.closeButtonText}>Close</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </Modal>

      {/* Transparent Confirmation Modal */}
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={confirmationStyle.modalOverlay}>
          <View style={confirmationStyle.modalContent}>
            <Text style={confirmationStyle.modalTitle}>Account created!</Text>
            <Text style={confirmationStyle.modalMessage}>
              Welcome aboard! Let's continue setting up your profile.
            </Text>
            <TouchableOpacity style={confirmationStyle.continueButton} onPress={handleContinue}>
              <Text style={confirmationStyle.continueButtonText}>Continue</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      
    </View>
  );
}
