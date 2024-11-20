import React, { useState, useEffect } from "react";
import {
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  Image,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import mainStyles from "../../stylesheet/mainStyle";
import contactStyles from "../../stylesheet/contactStyle";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { collection, doc, setDoc, Timestamp } from "firebase/firestore";
import { db } from "../../firebaseConfig"; // Firestore configuration file

export default function AddMedication({ route, navigation }) {
  // Fonts
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  // State Variables
  const [pillName, setPillName] = useState("");
  const [doctorName, setDoctorName] = useState("");
  const [frequencyOfPill, setFrequencyOfPill] = useState("");
  const [instruction, setInstruction] = useState("");
  const [photo, setPhoto] = useState(null);

  // Handle photo update
  useEffect(() => {
    if (route.params?.photo) {
      setPhoto(route.params.photo.uri);
    }
  }, [route.params?.photo]);

  // Clear input fields
  const clearFields = () => {
    setPillName("");
    setDoctorName("");
    setFrequencyOfPill("");
    setInstruction("");
    setPhoto(null);
  };

  // Handle adding medication to Firestore
  const handleDonePress = async () => {
    if (!pillName || !doctorName || !frequencyOfPill || !instruction) {
      Alert.alert("Error", "Please fill in all fields.");
      return;
    }

    const newMedication = {
      pillName,
      doctorName,
      frequencyOfPill,
      instruction,
      photo, // If you upload the photo to storage, replace this with the photo URL
      dateAdded: Timestamp.now(),
    };

    try {
      const docRef = doc(collection(db, "medications")); // Create a new document in the "medications" collection
      await setDoc(docRef, newMedication);

      console.log("New Medication:", newMedication);
      Alert.alert("Success", "Medication added successfully!");
      clearFields(); // Clear input fields after success

      // Navigate back to HealthPlan screen
      navigation.navigate("Home", {
        screen: "HealthPlan",
        params: { newMedication },
      });
    } catch (error) {
      console.error("Error adding medication:", error);
      Alert.alert("Error", "There was a problem adding the medication.");
    }
  };

  if (!fontsLoaded) {
    return null; // Return null if fonts are not loaded
  }

  return (
    <ScrollView style={[mainStyles.container]}>
      {/* Photo */}
      <Image
        source={photo ? { uri: photo } : require("../../assets/images/placeholder.png")}
        style={mainStyles.placeholderImage}
      />

      {/* Add Photo Button */}
      <View style={mainStyles.buttonContainer}>
        <TouchableOpacity
          style={[mainStyles.button5, mainStyles.cameraButton]}
          onPress={() => navigation.navigate("AddMedicationPhoto")}
        >
          <View style={[mainStyles.buttonContent]}>
            <Text style={mainStyles.buttonText}>Add Photo</Text>
            <Entypo name="camera" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>

      {/* Input Fields */}
      <View style={contactStyles.inputContactContainer}>
        <TextInput
          style={mainStyles.input1}
          placeholder="Pill Name"
          value={pillName}
          onChangeText={setPillName}
        />
        <TextInput
          style={mainStyles.input1}
          placeholder="Doctor Name"
          value={doctorName}
          onChangeText={setDoctorName}
        />
        <TextInput
          style={mainStyles.input1}
          placeholder="How many pills in how many days?"
          value={frequencyOfPill}
          onChangeText={setFrequencyOfPill}
        />
        <TextInput
          style={mainStyles.input1}
          placeholder="Instruction"
          value={instruction}
          onChangeText={setInstruction}
        />
      </View>

      {/* Done Button */}
      <View style={mainStyles.bottomButtonContainer}>
        <TouchableOpacity
          style={mainStyles.bottomButton}
          onPress={handleDonePress}
        >
          <View style={mainStyles.buttonContent}>
            <Text style={mainStyles.buttonText3}>Done</Text>
            <Feather name="arrow-right" size={24} color="white" />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
