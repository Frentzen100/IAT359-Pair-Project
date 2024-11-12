import { Text, Image, ScrollView, View, Modal, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';
import React, { useState, useEffect } from 'react';

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

export default function Dashboard() {

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
        setTimeLeft('0h   0m   0s'); // If it's past 11:59:59 PM
      }
    };

    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);

    // Clean up the timer on component unmount
    return () => clearInterval(timer);
  }, []);


  const [modalVisible, setModalVisible] = useState(false);
  const openModal = () => setModalVisible(true);
  const closeModal = () => setModalVisible(false);

  /*----------------------Daily Task -----------------------------------*/

  const [exerciseProgress, setExerciseProgress] = useState(20);
  const [exerciseGoal, setExerciseGoal] = useState(20);
  const exerciseProgressPercentage = (exerciseProgress / exerciseGoal) * 100; 

  const [calciumProgress, setCalciumProgress] = useState(400);
  const [calciumGoal, setCalciumGoal] = useState(1000);
  const calciumProgressPercentage = (calciumProgress / calciumGoal) * 100;

  const [vitaminDProgress, setVitaminDProgress] = useState(100);
  const [vitaminDGoal, setVitaminDGoal] = useState(600);
  const vitaminDProgressPercentage = (vitaminDProgress / vitaminDGoal) * 100;

  const [proteinProgress, setProteinProgress] = useState(42);
  const [proteinGoal, setProteinGoal] = useState(48);
  const proteinProgressPercentage = (proteinProgress / proteinGoal) * 100;

  let exerciseProgressBarColor = '#EA8740'; 
  let exerciseFullBarColor = '#EA874020'; 
  if (exerciseProgressPercentage >= 25 && exerciseProgressPercentage <= 50) {
    exerciseProgressBarColor = '#EACE40'; 
    exerciseFullBarColor = '#EACE4020'; 
  } else if (exerciseProgressPercentage > 50) {
    exerciseProgressBarColor = '#92ED61'; 
    exerciseFullBarColor = '#92ED6120'; 
  }

let calciumProgressBarColor = '#EA8740'; 
let calciumFullBarColor ='#EA874020'; 
if (calciumProgressPercentage >= 25 && calciumProgressPercentage <= 50) {
  calciumProgressBarColor = '#EACE40';
  calciumFullBarColor = '#EACE4020'; 
} else if (calciumProgressPercentage > 50) {
  calciumProgressBarColor = '#92ED61';
  calciumFullBarColor = '#92ED6120';
}
  
let proteinProgressBarColor = '#EA8740'; 
let proteinFullBarColor = '#EA874020'; 
if (proteinProgressPercentage >= 25 && proteinProgressPercentage <= 50) {
  proteinProgressBarColor = '#EACE40';
  proteinFullBarColor = '#EACE4020'; 
} else if (proteinProgressPercentage > 50) {
  proteinProgressBarColor = '#92ED61';
  proteinFullBarColor = '#92ED6120';
}

let vitaminDProgressBarColor = '#EA8740'; 
let vitaminDFullBarColor = '#EA874020'; 
if (vitaminDProgressPercentage >= 25 && vitaminDProgressPercentage <= 50) {
  vitaminDProgressBarColor = '#EACE40';
  vitaminDFullBarColor = '#EACE4020'; 
} else if (vitaminDProgressPercentage > 50) {
  vitaminDProgressBarColor = '#92ED61';
  vitaminDFullBarColor = '#92ED6120';
}
  
  /*---------------------------------Emoji----------------------------------------*/

  const [showEmojiMessage, setShowEmojiMessage] = useState(true);
  const [dontShowEmojiAgain, setDontShowEmojiAgain] = useState(false);

  const [selectedEmoji, setSelectedEmoji] = useState(null);
  const emojis = [
    { name: 'Drained', icon: <Ionicons name="sad-outline" size={24} color="#001B6280" />, label: 'Drained' },
    { name: 'Tired', icon: <MaterialCommunityIcons name="emoticon-sad-outline" size={24} color="#001B6280" />, label: 'Tired' },
    { name: 'Okay', icon: <Fontisto name="neutral" size={24} color="#001B6280" />, label: 'Okay' },
    { name: 'Active', icon: <MaterialCommunityIcons name="emoticon-happy-outline" size={24} color="#001B6280" />, label: 'Active' },
    { name: 'Energized', icon: <Ionicons name="happy-outline" size={24} color="#001B6280" />, label: 'Energize' }
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
  
  const [selectedPain, setSelectedPain] = useState(null);
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
    setSelectedPain(selectedPain === area ? null : area); 
};

const handlePainClick = (painName) => {
  if (selectedPain === painName) {
    setSelectedPain(null); 
    setShowPainMessage(false);
  } else {
    setSelectedPain(painName);
    setShowPainMessage(true); 
  }
}

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
          <Text style={mainStyles.heading1}>Welcome Alice!</Text>
          <View style={dashboardStyles.editContainer}>
            <Text style={mainStyles.caption}>Edit Profile</Text>
            <Entypo
              name="edit"
              size={12}
              color="black"
              style={dashboardStyles.editIcon}
            />
          </View>
        </View>
      </View>

      <View style={dashboardStyles.dashboardContainer}>
        <View style={dashboardStyles.dashboardHeadingContainer}>
          <Text style={mainStyles.heading1}>Today’s Health Dashboard</Text>
          <TouchableOpacity onPress={openModal}>
              <MaterialCommunityIcons
                name="information"
                size={20}
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

      {/*Dashboard Overview*/}
        <Text style={[mainStyles.paragraph, dashboardStyles.date]}>Monday, October 21</Text>
        <Text style={mainStyles.paragraph}>
          Track your health metrics and aim to stay within the green bar for
          optimal bone health. Your daily goals based on age, weight, and height
          are:
        </Text>
      </View>

      <ProgressBar progress={exerciseProgress} goal={exerciseGoal} icon="run" taskName="Exercise" />
      <ProgressBar progress={calciumProgress} goal={calciumGoal} icon="pill" taskName="Calcium Intake" />
      <ProgressBar progress={vitaminDProgress} goal={vitaminDGoal} icon="pill" taskName="Vitamin D Intake" />
      <ProgressBar progress={proteinProgress} goal={proteinGoal} icon="pill" taskName="Protein Intake" />

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
        isVisible={selectedEmoji && showEmojiMessage} 
        messageType="emoji" 
        selectedItem={selectedEmoji} 
        items={emojis} 
        closeHandler={handleEmojiCloseMessage} 
        toggleHandler={toggleDontShowEmojiAgain} 
        dontShowAgain={dontShowEmojiAgain} 
        label="Feeling Selected" 
      />
      
      {/*Pain*/}
      <View style={dashboardStyles.painGridContainer}>

        <Text style={[mainStyles.heading1, dashboardStyles.feelingTitle]}>
          Where are you feeling pain today?
        </Text>
        <Text style={[mainStyles.paragraph, dashboardStyles.feelingParagraph]}>
          Select the areas where you’re experiencing pain.
        </Text>
      
        {painAreas.map((painArea, index) => (
          <TouchableOpacity
            key={index}
            style={[
              dashboardStyles.painSelectionContainer,
              selectedPain === painArea.name ? dashboardStyles.selectedPain : {},
            ]}
            onPress={() => handleSelection(painArea.name)}
          >
            <Image
              source={painArea.image}
              style={dashboardStyles.painImage}
            />
            <Text style={[mainStyles.caption, dashboardStyles.painLabel]}>
              {painArea.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
      <Notification 
        isVisible={selectedPain && showPainMessage} 
        messageType="pain" 
        selectedItem={selectedPain} 
        items={painAreas} 
        closeHandler={handlePainCloseMessage} 
        toggleHandler={toggleDontShowPainAgain} 
        dontShowAgain={dontShowPainAgain} 
        label="Pain Selected" 
      />

    </ScrollView>
  );
}
