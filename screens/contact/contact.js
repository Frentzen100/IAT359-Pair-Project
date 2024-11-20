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
import Svg, { Path } from 'react-native-svg';


export function SimpleIconsReact(props) {
	return (<Svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 24 24" {...props}><Path fill="currentColor" d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236a2.236 2.236 0 0 1-2.236-2.236a2.236 2.236 0 0 1 2.235-2.236a2.236 2.236 0 0 1 2.236 2.236m2.648-10.69c-1.346 0-3.107.96-4.888 2.622c-1.78-1.653-3.542-2.602-4.887-2.602c-.41 0-.783.093-1.106.278c-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03c-.704 3.113-.39 5.588.988 6.38c.32.187.69.275 1.102.275c1.345 0 3.107-.96 4.888-2.624c1.78 1.654 3.542 2.603 4.887 2.603c.41 0 .783-.09 1.106-.275c1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032c.704-3.11.39-5.587-.988-6.38a2.17 2.17 0 0 0-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127c.666.382.955 1.835.73 3.704c-.054.46-.142.945-.25 1.44a23.5 23.5 0 0 0-3.107-.534A24 24 0 0 0 12.769 4.7c1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28c-.686.72-1.37 1.537-2.02 2.442a23 23 0 0 0-3.113.538a15 15 0 0 1-.254-1.42c-.23-1.868.054-3.32.714-3.707c.19-.09.4-.127.563-.132zm4.882 3.05q.684.704 1.36 1.564c-.44-.02-.89-.034-1.345-.034q-.691-.001-1.36.034c.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093q.61.874 1.183 1.86q.557.961 1.018 1.946c-.308.655-.646 1.31-1.013 1.95c-.38.66-.773 1.288-1.18 1.87a25.6 25.6 0 0 1-4.412.005a27 27 0 0 1-1.183-1.86q-.557-.961-1.018-1.946a25 25 0 0 1 1.013-1.954c.38-.66.773-1.286 1.18-1.868A25 25 0 0 1 12 8.098zm-3.635.254c-.24.377-.48.763-.704 1.16q-.336.585-.635 1.174c-.265-.656-.49-1.31-.676-1.947c.64-.15 1.315-.283 2.015-.386zm7.26 0q1.044.153 2.006.387c-.18.632-.405 1.282-.66 1.933a26 26 0 0 0-1.345-2.32zm3.063.675q.727.226 1.375.498c1.732.74 2.852 1.708 2.852 2.476c-.005.768-1.125 1.74-2.857 2.475c-.42.18-.88.342-1.355.493a24 24 0 0 0-1.1-2.98c.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98a23 23 0 0 0-1.086 2.964c-.484-.15-.944-.318-1.37-.5c-1.732-.737-2.852-1.706-2.852-2.474s1.12-1.742 2.852-2.476c.42-.18.88-.342 1.356-.494m11.678 4.28c.265.657.49 1.312.676 1.948c-.64.157-1.316.29-2.016.39a26 26 0 0 0 1.341-2.338zm-9.945.02c.2.392.41.783.64 1.175q.345.586.705 1.143a22 22 0 0 1-2.006-.386c.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423c.23 1.868-.054 3.32-.714 3.708c-.147.09-.338.128-.563.128c-1.012 0-2.514-.807-4.11-2.28c.686-.72 1.37-1.536 2.02-2.44c1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532c.66.905 1.345 1.727 2.035 2.446c-1.595 1.483-3.092 2.295-4.11 2.295a1.2 1.2 0 0 1-.553-.132c-.666-.38-.955-1.834-.73-3.703c.054-.46.142-.944.25-1.438zm4.56.64q.661.032 1.345.034q.691.001 1.36-.034c-.44.572-.895 1.095-1.345 1.565q-.684-.706-1.36-1.565"></Path></Svg>);
}


export default function Contact() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  

  const navigation = useNavigation();
  const route = useRoute();
  const [contacts, setContacts] = useState([]); // State to hold the list of contacts

  // Fetch contacts from Firestore when the component mounts
  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, 'contacts'));
        const fetchedContacts = querySnapshot.docs.map(doc => doc.data());
        setContacts(fetchedContacts);
      } catch (error) {
        console.error('Error fetching contacts:', error);
      }
    };

    fetchContacts();

    // Check if a new contact is passed through route parameters
    if (route.params?.newContact) {
      setContacts((prevContacts) => [...prevContacts, route.params.newContact]);
    }
  }, [route.params?.newContact]);

  return (
    <ScrollView style={[mainStyles.container]}>

      <Text style={mainStyles.heading1}>My Contacts</Text>
      <Text style={[mainStyles.paragraph, contactStyles.overallOverviewParagraph]}>
        Keep important contacts at your fingertips in case of emergencies. Quickly access medical professionals, family, or caregivers when you need help.
      </Text>

      <View style={mainStyles.buttonContainer}>
        <TouchableOpacity
          style={mainStyles.button2}
          onPress={() => navigation.navigate('AddContact')}
        >
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
              {contact.photo ? (
                <Image
                  source={{ uri: contact.photo }}
                  style={contactStyles.contactPersonPhoto}
                />
              ) : (
                <Text style={contactStyles.contactPersonFirstInitial}>
                  {contact.firstName ? contact.firstName.charAt(0) : ''}
                </Text>
              )}
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