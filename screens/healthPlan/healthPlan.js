import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import healthPlanStyles from '../../stylesheet/healthPlanStyle';
import mainStyles from '../../stylesheet/mainStyle';

import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';

import { useNavigation } from '@react-navigation/native'; // Import useNavigation hook


export default function HealthPlan() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const navigation = useNavigation(); // Initialize the navigation hook

  return (
    <ScrollView style={[mainStyles.container]}>

      {/*Overview*/}
      <Image
            source={require('../../assets/icons/healthPlan2.png')} 
            style={mainStyles.heroIcon}
      />
      <Text style={mainStyles.heading1}>My Health Plan</Text>
      <Text style={[mainStyles.paragraph,healthPlanStyles.overallPlanParagraph]}>Your personalized osteoporosis management plan with recommended exercises, nutrition intake, and prescriptions tracking.</Text>

      {/*Exercise*/}
      <Text style={mainStyles.heading1}>Recommended Exercise</Text>
      <Text style={[mainStyles.paragraph,healthPlanStyles.overallExerciseParagraph]}>Your Goal: 20 mins of Exercise</Text>

      {/*Indoor*/}
      <View style={healthPlanStyles.exerciseContainer}>
         <Image
            source={require('../../assets/images/indoor.png')} 
            style={healthPlanStyles.exerciseImage}
          />
          <Text style={mainStyles.heading2}>Indoor Back Stretching</Text>

          <View style={healthPlanStyles.exerciseSubContainer}>
            <View style={healthPlanStyles.viewMoreContainer}>
              <Text style={[mainStyles.caption, healthPlanStyles.exerciseTotalTime]}>10 minutes</Text>
              <TouchableOpacity style={mainStyles.button3} onPress={""}>
              <View style={mainStyles.buttonContent}>
                <Text style={mainStyles.buttonText2}>View More</Text>
                <Ionicons name="arrow-forward" size={18} color="white" />
              </View>
              </TouchableOpacity>
            </View>
          </View>
      </View>

      {/*Outdoor*/}
      <View style={healthPlanStyles.exerciseContainer}>
         <Image
            source={require('../../assets/images/outdoor.png')} 
            style={healthPlanStyles.exerciseImage}
          />
          <Text style={mainStyles.heading2}>Outdoor Walk</Text>

          <View style={healthPlanStyles.exerciseSubContainer}>
            <View style={healthPlanStyles.viewMoreContainer}>
              <Text style={[mainStyles.caption, healthPlanStyles.exerciseTotalTime]}>12 minutes</Text>
              <TouchableOpacity style={mainStyles.button3} onPress={() => navigation.navigate('Outdoor1')}>
              <View style={mainStyles.buttonContent}>
                <Text style={mainStyles.buttonText2}>View More</Text>
                <Ionicons name="arrow-forward" size={18} color="white" />
              </View>
              </TouchableOpacity>
            </View>
          </View>
      </View>

      {/* Nutrition*/}
      <Text style={[mainStyles.heading1, healthPlanStyles.healthTitle]}>Nutrition Intake</Text>
      <Text style={[mainStyles.paragraph,healthPlanStyles.overallPlanParagraph]}>Capture a photo of your meal to log your daily food diary and track nutrients intake. </Text>

      {/*View Log Button*/}
      <View style={mainStyles.buttonContainer}>
        <TouchableOpacity style={mainStyles.button2} onPress={""}>
          <View style={mainStyles.buttonContent}>
            <Text style={mainStyles.buttonText2}>Log and Track My Meal </Text>
            <Ionicons name="arrow-forward" size={18} color="white" />

          </View>
        </TouchableOpacity>
      </View>

      {/*Prescription*/}
      <View style={healthPlanStyles.prescriptionContainer}>
        <View style={healthPlanStyles.prescriptionHeadingContainer}>
          <Text style={mainStyles.heading1}>My Prescription Notes</Text>
          <AntDesign name="plussquare" size={24} color="black" />
        </View>
        <View style={healthPlanStyles.prescriptionNoteContainer}>
          <View style={healthPlanStyles.noteTextContainer}>
            <Text style={healthPlanStyles.noteTitle}>Alendronate (Fosamax)</Text>
            <Text style={healthPlanStyles.noteSubtitle}>Notes from Dr. Winters</Text>
            <Text style={healthPlanStyles.noteInstructions}>Take 5 mg once daily after every meal.</Text>
          </View>   
          <View style={healthPlanStyles.imageContainer}>
            <Image
            source={require('../../assets/images/note1.png')} 
            style={healthPlanStyles.noteImage}
          />
          </View>
        </View>

      </View>


    </ScrollView>
  );
}