import { Text, Image, ScrollView, View, TouchableOpacity,
} from "react-native";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import React, { useState, useEffect } from "react";

import healthPlanStyles from "../../stylesheet/healthPlanStyle";
import mainStyles from "../../stylesheet/mainStyle";

import { Ionicons } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

import { useNavigation, useRoute } from "@react-navigation/native";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebaseConfig";
import dashBoardStyles from "../../stylesheet/dashboardStyle";


export default function HealthPlan() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const route = useRoute();
  const navigation = useNavigation();
  const [medications, setMedications] = useState([]);

  const exerciseTime = 12;

  useEffect(() => {
    const fetchMedications = async () => {
      try {
        const medicationsCollection = collection(db, "medications");
        const medicationsSnapshot = await getDocs(medicationsCollection);
        const medicationsList = medicationsSnapshot.docs.map(doc => doc.data());
        setMedications(medicationsList);
      } catch (error) {
        console.error("Error fetching medications:", error);
      }
    };
  
    if (route.params?.newMedication) {
      const saveMedication = async () => {
        try {
          const medicationsCollection = collection(db, "medications");
          await addDoc(medicationsCollection, route.params.newMedication);
          setMedications(prev => [...prev, route.params.newMedication]);
        } catch (error) {
          console.error("Error saving medication:", error);
        }
      };
      saveMedication();
    } else {
      fetchMedications();
    }
  }, [route.params?.newMedication]);

  if (!fontsLoaded) {
    return null; // Return null if fonts are not loaded
  }

  return (
    <ScrollView style={[mainStyles.container]}>
      {/* Overview */}
      <Image
        source={require("../../assets/icons/healthPlan2.png")}
        style={mainStyles.heroIcon}
      />
      <Text style={mainStyles.heading1}>My Guides</Text>
      <Text
        style={[mainStyles.paragraph, healthPlanStyles.overallPlanParagraph]}
      >
        Your personalized osteoporosis management plan with recommended
        exercises, nutrition intake, and medication tracking.
      </Text>

      {/* Exercise */}
      <Text style={mainStyles.heading1}>Recommended Exercise</Text>
      <Text
        style={[mainStyles.paragraph, healthPlanStyles.overallExerciseParagraph]}
      >
        Your Goal: 20 mins of Exercise
      </Text>

      {/* Indoor */}
      <View style={healthPlanStyles.exerciseContainer}>
        <Image
          source={require("../../assets/images/indoor.png")}
          style={healthPlanStyles.exerciseImage}
        />
        <Text style={mainStyles.heading2}>Indoor Stretch</Text>

        <View style={healthPlanStyles.exerciseSubContainer}>
          <View style={[healthPlanStyles.viewMoreContainer]}>
            <Text
              style={[mainStyles.caption, healthPlanStyles.exerciseTotalTime]}
            >
              10 minutes
            </Text>
            <TouchableOpacity style={[mainStyles.button3, healthPlanStyles.learnExerciseButton]} onPress={() => {}}>
              <View style={mainStyles.buttonContent}>
                <Text style={mainStyles.buttonText2}>View More</Text>
                <Ionicons name="arrow-forward" size={18} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Outdoor */}
      <View style={healthPlanStyles.exerciseContainer}>
        <Image
          source={require("../../assets/images/outdoor.png")}
          style={healthPlanStyles.exerciseImage}
        />
        <Text style={mainStyles.heading2}>Outdoor Walk</Text>

        <View style={healthPlanStyles.exerciseSubContainer}>
          <View style={healthPlanStyles.viewMoreContainer}>
            <Text
              style={[mainStyles.caption, healthPlanStyles.exerciseTotalTime]}
            >
              {exerciseTime} minutes
            </Text>
            <TouchableOpacity
              style={[mainStyles.button3, healthPlanStyles.learnExerciseButton]}
              onPress={() => navigation.navigate("Outdoor1", {exerciseTime})}
              >
              <View style={mainStyles.buttonContent}>
                <Text style={mainStyles.buttonText2}>View More</Text>
                <Ionicons name="arrow-forward" size={18} color="white" />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Nutrition */}
      <Text
        style={[mainStyles.heading1, healthPlanStyles.healthTitle]}
      >
        Nutrition Intake
      </Text>
      <Text
        style={[mainStyles.paragraph, healthPlanStyles.overallPlanParagraph]}
      >
        Capture a photo of your meal to log your daily food diary and track
        nutrients intake.
      </Text>

      {/* View Log Button */}
      <View style={mainStyles.buttonContainer}>
        <TouchableOpacity
          style={mainStyles.button2}
          onPress={() => navigation.navigate("addMedication")}
        >
          <View style={mainStyles.buttonContent}>
            <Text style={mainStyles.buttonText2}>Log and Track My Meal</Text>
            <Ionicons name="arrow-forward" size={18} color="white" />
          </View>
        </TouchableOpacity>
      </View>

       {/* Prescription */}
       <View style={healthPlanStyles.prescriptionContainer}>
        <View style={healthPlanStyles.prescriptionHeadingContainer}>
          <Text style={mainStyles.heading1}>My Medication Notes</Text>
          <AntDesign
            name="plussquare"
            size={40}
            color="black"
            onPress={() => navigation.navigate("AddMedication")}
            style = {healthPlanStyles.addMedicationIcon}
          />
        </View>

        {medications.length > 0 ? (
          medications.map((medication, index) => (
            <View
              key={index}
              style={healthPlanStyles.prescriptionNoteContainer}
            >
              <View style={healthPlanStyles.noteTextContainer}>
                <Text style={healthPlanStyles.noteTitle}>
                  {medication.pillName}
                </Text>
                <Text style={healthPlanStyles.noteSubtitle}>
                  Notes from Dr. {medication.doctorName}
                </Text>
                <Text style={healthPlanStyles.noteInstructions}>
                  {medication.frequencyOfPill}
                </Text>
                <Text style={healthPlanStyles.noteInstructions}>
                  {medication.instruction}
                </Text>
              </View>
              <View style={healthPlanStyles.imageContainer}>
                <Image
                 source={
                  medication.photo
                    ? { uri: medication.photo }
                    : require("../../assets/images/note1.png") 
                  }
                  style={healthPlanStyles.noteImage}
                />
              </View>
            </View>
          ))
        ) : (
          <Text style={[mainStyles.paragraph,healthPlanStyles.noMedication]}>No medications added yet.</Text>
        )}
      </View>
    </ScrollView>
  );
}
