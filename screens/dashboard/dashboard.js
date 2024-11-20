import { Text, Image, ScrollView, View, Modal, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import React, { useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import dashboardStyles from '../../stylesheet/dashboardStyle';
import mainStyles from '../../stylesheet/mainStyle';

import ProgressBar from '../../component/progressBar'; 
import Notification from '../../component/notification';

import { MaterialIcons } from '@expo/vector-icons'; 
import Entypo from '@expo/vector-icons/Entypo';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import Fontisto from '@expo/vector-icons/Fontisto';
import Octicons from '@expo/vector-icons/Octicons';

import { useNavigation, useRoute } from '@react-navigation/native'; 

export default function Dashboard() {
  const navigation = useNavigation();
  const route = useRoute();

  const [firstName, setFirstName] = useState(null);
  const [age, setAge] = useState(null);
  const [weight, setWeight] = useState(null);
  const [height, setHeight] = useState(null);
  const [heightUnit, setHeightUnit] = useState('cm');
  const [weightUnit, setWeightUnit] = useState('kg');
  const [gender, setGender] = useState(null);

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfDay = new Date();
      endOfDay.setHours(23, 59, 59, 999); // Set target time to 11:59:59 PM
  
      const difference = endOfDay - now;
  
      if (difference > 0) {
        const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((difference / (1000 * 60)) % 60);
        const seconds = Math.floor((difference / 1000) % 60);
        setTimeLeft(`${hours}h   ${minutes}m   ${seconds}s`);
      } else {
        setTimeLeft("0h   0m   0s"); // If it's past 11:59:59 PM
      }
    };

    const getUserDataFromStorage = async () => {
      try {
        const name = await AsyncStorage.getItem('@user_name');
        const userAge = await AsyncStorage.getItem('@user_age');
        const userWeight = await AsyncStorage.getItem('@user_weight');
        const userHeight = await AsyncStorage.getItem('@user_height');
        const userHeightUnit = await AsyncStorage.getItem('@user_height_unit');
        const userWeightUnit = await AsyncStorage.getItem('@user_weight_unit');
        const userGender = await AsyncStorage.getItem('@user_gender');
  
        if (name) setFirstName(name);
        if (userAge) setAge(userAge);
        if (userWeight) setWeight(userWeight);
        if (userHeight) setHeight(userHeight);
        if (userHeightUnit) setHeightUnit(userHeightUnit);
        if (userWeightUnit) setWeightUnit(userWeightUnit);
        if (userGender) setGender(userGender);
      } catch (e) {
        console.error('Failed to load user data:', e);
      }
    };
  
    getUserDataFromStorage();
  
    // Increment exerciseProgress if route.params?.exerciseIncrement is present
    if (route.params?.exerciseIncrement) {
      setExerciseProgress((prevProgress) => {
        const newProgress = prevProgress + route.params.exerciseIncrement;
        return newProgress > exerciseGoal ? exerciseGoal : newProgress; // Limit progress to exerciseGoal
      });
  
      // Clear the parameter after the increment
      navigation.setParams({ exerciseIncrement: null });
    }
  
    // Start the timer to update the countdown
    const timer = setInterval(calculateTimeLeft, 1000);
  
    // Clean up the timer on component unmount
    return () => clearInterval(timer);
  }, [route.params?.exerciseIncrement]);

  const getCurrentDate = () => {
    const date = new Date();
    const options = { weekday: 'long', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options); // Uses the default locale
  };

  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  /*----------------------Daily Task -----------------------------------*/

   // Calculate calcium intake
   const calculateCalciumIntake = (age, gender) => {
    let calciumIntake = '';
    if (gender === 'Female') {
      if (age >= 19 && age <= 50) calciumIntake = 1000;
      else if (age > 50) calciumIntake = 1200;
    } else if (gender === 'Male') {
      if (age >= 19 && age <= 70) calciumIntake = 1000;
      else if (age > 70) calciumIntake = 1200;
    }
    return calciumIntake;
  };

  // Calculate protein intake
  const calculateProteinIntake = (weight, weightUnit) => {
    let proteinIntake = 0;
    if (weightUnit === 'kg') {
      proteinIntake = weight * 0.8;
    } else if (weightUnit === 'lbs') {
      proteinIntake = (weight * 0.453592) * 0.8;
    }
    return Math.round(proteinIntake);
  };

  // Calculate Vitamin D intake
  const calculateVitaminDIntake = (age) => {
    return age >= 70 ? 600 : 800;
  };

  const calciumIntake = calculateCalciumIntake(Number(age), gender);
  const proteinIntake = calculateProteinIntake(Number(weight), weightUnit);
  const vitaminDIntake = calculateVitaminDIntake(Number(age));

  const [exerciseProgress, setExerciseProgress] = useState(0);
  const [exerciseGoal, setExerciseGoal] = useState(30);
  const exerciseProgressPercentage = (exerciseProgress / exerciseGoal) * 100; 

  const [calciumProgress, setCalciumProgress] = useState(0);
  const calciumProgressPercentage = (calciumProgress / calciumIntake) * 100;

  const [vitaminDProgress, setVitaminDProgress] = useState(0);
  const vitaminDProgressPercentage = (vitaminDProgress / vitaminDIntake) * 100;

  const [proteinProgress, setProteinProgress] = useState(0);
  const proteinProgressPercentage = (proteinProgress / proteinIntake) * 100;

/*---------------------Emoji----------------------------------------*/

  const [showEmojiMessage, setShowEmojiMessage] = useState(true);
  const [dontShowEmojiAgain, setDontShowEmojiAgain] = useState(false);

  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const emojis = [
    { name: 'Drained', icon: <Ionicons name="sad-outline" size={60} color="#001B6280" />, label: 'Drained' },
    { name: 'Tired', icon: <MaterialCommunityIcons name="emoticon-sad-outline" size={60} color="#001B6280" />, label: 'Tired' },
    { name: 'Okay', icon: <Fontisto name="neutral" size={50} color="#001B6280" />, label: 'Okay' },
    { name: 'Active', icon: <MaterialCommunityIcons name="emoticon-happy-outline" size={60} color="#001B6280" />, label: 'Active' },
    { name: 'Energized', icon: <Ionicons name="happy-outline" size={60} color="#001B6280" />, label: 'Energize' }
  ];

  const handleEmojiClick = (emojiName) => {
    if (selectedEmoji === emojiName) {
      setSelectedEmoji(null); 
      setShowEmojiMessage(false);
    } else {
      setSelectedEmoji(emojiName);
      setShowEmojiMessage(true); 
    }
  }

  const handleEmojiCloseMessage = () => {
    setShowEmojiMessage(false);
  };

  const toggleDontShowEmojiAgain = () => {
    setDontShowEmojiAgain((prev) => !prev);
  };

  /*---------------------------------Pain----------------------------------------*/
  
  const [selectedPain, setSelectedPain] = useState([]);
  const [showPainMessage, setShowPainMessage] = useState(true);
  const [dontShowPainAgain, setDontShowPainAgain] = useState(false);
  
  const painAreas = [
    { name: 'Back', image: require('../../assets/icons/pain.png'), label: 'Back' },
    { name: 'Knees', image: require('../../assets/icons/pain.png'), label: 'Knees' },
    { name: 'Hips', image: require('../../assets/icons/pain.png'), label: 'Hips' },
    { name: 'Wrists', image: require('../../assets/icons/pain.png'), label: 'Wrists' },
    { name: 'Neck', image: require('../../assets/icons/pain.png'), label: 'Neck' },
    { name: 'Pain Free', image: require('../../assets/icons/pain.png'), label: 'Pain Free' },
  ];

  const handleSelection = (area) => {
    setSelectedPain((prev) => {
      if (!Array.isArray(prev)) {
        prev = []; // Fallback to an empty array if the previous state is invalid
      }
      if (prev.includes(area)) {
        // Remove the area if it's already selected
        return prev.filter((item) => item !== area);
      } else {
        // Add the area to the selection
        return [...prev, area];
      }
    });
    setShowPainMessage(true); // Show notification message
  };
  
const handlePainCloseMessage = () => {
  setShowPainMessage(false);
};

const toggleDontShowPainAgain = () => {
  setDontShowPainAgain((prev) => !prev);
};


  return (
    <ScrollView style={mainStyles.container}>
      {/*Profile Card*/}
      <View style={dashboardStyles.profileContainer}>
       <Image
        source={require('../../assets/icons/profile.png')} 
        style={mainStyles.heroIcon}
      />
        <View style={dashboardStyles.profileInfoContainer}>
          <Text style={mainStyles.heading3}>Welcome, {firstName}!</Text>
        </View>
      </View>

      <View style={dashboardStyles.dashboardContainer}>
        <View style={dashboardStyles.dashboardHeadingContainer}>
          <Text style={mainStyles.heading3}>Today’s Health Dashboard</Text>
          <TouchableOpacity onPress={openModal}>
              <MaterialCommunityIcons
                name="information"
                size={30}
                color="black"
                style={dashboardStyles.infoIcon}
              />
            </TouchableOpacity>
        </View>

        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={closeModal}
        >
          <View style={dashboardStyles.modalOverlay}>
            <View style={dashboardStyles.modalContent}>
              <TouchableOpacity onPress={closeModal} style={dashboardStyles.closeButton}>
                <Text style={dashboardStyles.closeButtonText}>×</Text>
              </TouchableOpacity>
              <Text style={dashboardStyles.modalText}>
                Time left to refresh your dashboard and get your overall health result
              </Text>
              <Text style={dashboardStyles.modalTextCountdown}>{timeLeft}</Text>
            </View>
          </View>
        </Modal>

        <Text style={[mainStyles.labelText, dashboardStyles.date]}>{getCurrentDate()}</Text>
      </View>

      <Text style={[mainStyles.heading2, dashboardStyles.metricHeading]}>Your Health Metrics </Text>
      <Text style={mainStyles.paragraph}> Track your health metrics and stay in the green bar for optimal bone health.</Text>

      <ProgressBar progress={exerciseProgress} goal={exerciseGoal} icon="run" taskName="Exercise" />
      <ProgressBar progress={calciumProgress} goal={calciumIntake} taskName="Calcium Intake" />
      <ProgressBar progress={vitaminDProgress} goal={vitaminDIntake} taskName="Vitamin D Intake" />
      <ProgressBar progress={proteinProgress} goal={proteinIntake} taskName="Protein Intake" />

      {/*Feeling and Emoji*/}
      <View style={dashboardStyles.feelingContainer}>
        <Text style={[mainStyles.heading1, dashboardStyles.feelingTitle]}>
          How are you feeling today?
        </Text>
        <Text style={[mainStyles.paragraph, dashboardStyles.feelingParagraph]}>
          Tap the emotion that best matches your overall mood or feeling today.
        </Text>
      </View>
      <View style={dashboardStyles.emojiContainer}>
        {emojis.map((emoji, index) => (
          <TouchableOpacity
            key={index}
            style={[
              dashboardStyles.singleEmojiContainer,
              selectedEmoji === emoji.name && dashboardStyles.selectedEmoji // Apply styles for selected emoji
            ]}
            onPress={() => handleEmojiClick(emoji.name)}
          >
            <View style={[dashboardStyles.emojiIconContainer, selectedEmoji === emoji.name && dashboardStyles.selectedEmojiIcon]}>
              {emoji.icon}
            </View>
            <Text style={[mainStyles.caption, dashboardStyles.emojiLabel]}>
              {emoji.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Notification 
        isVisible={!!selectedEmoji && showEmojiMessage} 
        messageType="emoji" 
        selectedItem={selectedEmoji} // Single select string
        items={emojis} // Full list of emojis
        closeHandler={handleEmojiCloseMessage} 
        toggleHandler={toggleDontShowEmojiAgain} 
        dontShowAgain={dontShowEmojiAgain} 
        label="Feeling Selected" 
      />
      
       {/* Pain Selection Section */}
       <View style={dashboardStyles.painGridContainer}>
        <Text style={[mainStyles.heading1, dashboardStyles.feelingTitle]}>
          Where are you feeling pain today?
        </Text>
        <Text style={[mainStyles.paragraph, dashboardStyles.feelingParagraph]}>
          Select the areas where you’re experiencing pain.
        </Text>

        {/* Pain Areas */}
        {painAreas.map((painArea, index) => (
          <TouchableOpacity
            key={index}
            style={[
              dashboardStyles.painSelectionContainer,
              selectedPain.includes(painArea.name) ? dashboardStyles.selectedPain : {}, // Highlight if selected
            ]}
            onPress={() => handleSelection(painArea.name)}
          >
            <Image source={painArea.image} style={dashboardStyles.painImage} />
            <Text style={[mainStyles.caption, dashboardStyles.painLabel]}>
              {painArea.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Notification 
        isVisible={selectedPain.length > 0 && showPainMessage} 
        messageType="pain" 
        selectedItem={selectedPain} // Pass the array of selected pains
        items={painAreas} // Pass the full list of pain areas
        closeHandler={handlePainCloseMessage} 
        toggleHandler={toggleDontShowPainAgain} 
        dontShowAgain={dontShowPainAgain} 
        label="Pain Areas Selected" 
      />
    </ScrollView>
  );
}
