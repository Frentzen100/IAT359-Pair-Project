import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import contactStyles from '../../stylesheet/contactStyle';
import mainStyles from '../../stylesheet/mainStyle';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import Entypo from '@expo/vector-icons/Entypo';
import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { db } from '../../firebaseConfig';  // Import Firestore instance
import { collection, getDocs } from 'firebase/firestore';  // Firestore functions for fetching data

export default function Contact() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const navigation = useNavigation();
  const route = useRoute();
  const [contacts, setContacts] = useState([]); // State to hold list of contacts

  // Fetch contacts from Firestore when the component mounts
  useEffect(() => {
    const fetchContacts = async () => {
      const querySnapshot = await getDocs(collection(db, 'contacts'));
      const fetchedContacts = querySnapshot.docs.map(doc => doc.data());
      setContacts(fetchedContacts);
    };

    fetchContacts();

    // Check if a new contact is passed through route parameters
    if (route.params?.newContact) {
      setContacts((prevContacts) => [...prevContacts, route.params.newContact]);
    }
  }, [route.params?.newContact]);

  return (
    <ScrollView style={[mainStyles.container]}>
      <Image
        source={require('../../assets/icons/contact2.png')} 
        style={mainStyles.heroIcon}
      />
      <Text style={mainStyles.heading1}>My Contacts</Text>
      <Text style={[mainStyles.paragraph, contactStyles.overallOverviewParagraph]}>
        Keep important contacts at your fingertips in case of emergencies. Quickly access medical professionals, family, or caregivers when you need help.
      </Text>

      <View style={mainStyles.buttonContainer}>
        <TouchableOpacity style={mainStyles.button2} onPress={() => navigation.navigate('AddContact')}>
          <View style={mainStyles.buttonContent}>
            <Text style={mainStyles.buttonText}>Add Contact</Text>
            <Entypo name="plus" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      {contacts.length > 0 ? (
      contacts.map((contact, index) => (
        <View key={index} style={contactStyles.personContainer}>
          <View style={contactStyles.contactPersonContainer}>
            <Text style={contactStyles.contactPersonFirstInitial}>
              {contact.firstName ? contact.firstName.charAt(0) : ''}
            </Text>
            <View style={contactStyles.contactDetailsContainer}>
              <Text style={contactStyles.contactPersonName}>
                {contact.firstName} {contact.lastName}
              </Text>
              <Text style={contactStyles.contactPersonJob}>
                ({contact.job})
              </Text>
            </View>
            <FontAwesome name="phone" size={32} color="#84DD54" />
          </View>
        </View>
      ))
    ) : (
      <Text style={[mainStyles.paragraph, contactStyles.noContactStatus]}>
        No contact information available. Please add a new contact.
      </Text>
    )}
    </ScrollView>
  );
}
