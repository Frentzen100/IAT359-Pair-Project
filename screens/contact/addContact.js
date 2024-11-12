import { Text, ScrollView, View, TouchableOpacity, TextInput } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import mainStyles from '../../stylesheet/mainStyle';
import contactStyles from '../../stylesheet/contactStyle';
import React, { useState } from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import Feather from '@expo/vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../firebaseConfig'; 
import { collection, addDoc } from 'firebase/firestore'; 
import { getFirestore } from 'firebase/firestore'

export default function AddContact() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [job, setJob] = useState('');
  const [phone, setPhone] = useState('');

  const handleDonePress = async () => {
    const newContact = {
      firstName: firstName,
      lastName: lastName,
      job: job,
      phone: phone,
    };
  
    try {
      // Make sure db is a valid Firestore instance
      console.log(db); // Log to check if db is correctly initialized
  
      // Correctly call the collection and add a document
      const docRef = await addDoc(collection(db, 'contacts'), newContact);
      console.log("Contact added with ID: ", docRef.id);
  
      // Navigate to Contact.js with new contact as a parameter
      navigation.navigate('Contact', {
        newContact,
      });
    } catch (e) {
      console.error("Error adding contact: ", e);
    }
  };

  return (
    <ScrollView style={[mainStyles.container]}>
       <FontAwesome name="user-circle-o" size={100} color="#001B62" style={contactStyles.inputProfileIcon} />

       <View style={mainStyles.buttonContainer}>
            <TouchableOpacity style={mainStyles.button5} onPress={() => navigation.navigate('AddContact')}>
                <View style={mainStyles.buttonContent}>
                    <Text style={mainStyles.buttonText}>Add Photo</Text>
                    <Entypo name="camera" size={24} color="white" />
                </View>
            </TouchableOpacity>
         </View>

        <View style={contactStyles.inputContactContainer}>
            <TextInput 
                style={mainStyles.input1}
                placeholder="First Name"
                value={firstName}
                onChangeText={setFirstName}   
            />

            <TextInput 
                style={mainStyles.input1}
                placeholder="Last Name"
                value={lastName}
                onChangeText={setLastName}   
            />

            <TextInput 
                style={mainStyles.input1}
                placeholder="Occupation"
                value={job}
                onChangeText={setJob}   
            />

            <TextInput 
                style={mainStyles.input1}
                placeholder="Phone"
                value={phone}
                onChangeText={setPhone}   
            />
        </View>

        <View style={mainStyles.bottomButtonContainer}>
            <TouchableOpacity style={mainStyles.bottomButton} onPress={handleDonePress}>
                <View style={mainStyles.buttonContent}>
                    <Text style={mainStyles.buttonText3}>Done </Text>
                    <Feather name="arrow-right" size={24} color="white" />
                </View>
            </TouchableOpacity>
        </View>
    </ScrollView>
  );
}