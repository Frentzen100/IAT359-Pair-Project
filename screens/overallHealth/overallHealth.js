import { Text, Image, ScrollView, View, TouchableOpacity } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import overallHealthStyle from '../../stylesheet/overallHealthStyle';
import mainStyles from '../../stylesheet/mainStyle';

import BottomNav from '../../component/progressBar';

import { Ionicons } from '@expo/vector-icons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';

export default function OverallHealth() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  return (
    <ScrollView style={mainStyles.container}>

      {/*Overview*/}
      <Image
            source={require('../../assets/icons/overallHealth2.png')} 
            style={mainStyles.heroIcon}
      />
      <Text style={mainStyles.heading1}>My Overall Health</Text>
      <Text style={[mainStyles.paragraph,overallHealthStyle.overallOverviewParagraph]}>View a summary of your long-term health trends, including overall bone health, activity levels, and progress over time.</Text>

      {/*View Log Button*/}
      <View style={mainStyles.buttonContainer}>
        <TouchableOpacity style={mainStyles.button2} onPress={""}>
          <View style={mainStyles.buttonContent}>
            <Text style={mainStyles.buttonText}>View Daily Log</Text>
            <Ionicons name="calendar-clear-sharp" size={24} color="white" style={mainStyles.buttonIcon}/>
          </View>
        </TouchableOpacity>
      </View>

      {/*Result 1*/}
      <View style={mainStyles.dailyContainer}>
          <Text style={[mainStyles.heading2, overallHealthStyle.dailyTitle]}>Overall Bone Health</Text>
        
        <View style={mainStyles.iconAndBarContainer}>
          <View style={mainStyles.iconContainer}>
            <Text style={overallHealthStyle.resultNumber}>60%</Text>
          </View>
          <View style={mainStyles.fullBar}>
            <View style={mainStyles.progessBar} />
          </View>
        </View>

        <View style={mainStyles.listContainer}>
          <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• Bone health at 60%, a moderate level.</Text>
         <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• Bone health at 60%, a moderate level.</Text>
           <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• Bone health at 60%, a moderate level.</Text>
        </View>
      </View>

      {/*Result 1*/}
      <View style={mainStyles.dailyContainer}>
          <Text style={[mainStyles.heading2, overallHealthStyle.dailyTitle]}>Overall Bone Health</Text>
        
        <View style={mainStyles.iconAndBarContainer}>
          <View style={mainStyles.iconContainer}>
            <Text style={overallHealthStyle.resultNumber}>60%</Text>
          </View>
          <View style={mainStyles.fullBar}>
            <View style={mainStyles.progessBar} />
          </View>
        </View>

        <View style={mainStyles.listContainer}>
          <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• Bone health at 60%, a moderate level.</Text>
         <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• Bone health at 60%, a moderate level.</Text>
           <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• Bone health at 60%, a moderate level.</Text>
        </View>
      </View>

      {/*Result 1*/}
      <View style={mainStyles.dailyContainer}>
          <Text style={[mainStyles.heading2, overallHealthStyle.dailyTitle]}>Overall Bone Health</Text>
        
        <View style={mainStyles.iconAndBarContainer}>
          <View style={mainStyles.iconContainer}>
            <Text style={overallHealthStyle.resultNumber}>60%</Text>
          </View>
          <View style={mainStyles.fullBar}>
            <View style={mainStyles.progessBar} />
          </View>
        </View>

        <View style={mainStyles.listContainer}>
          <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• Bone health at 60%, a moderate level.</Text>
         <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• Bone health at 60%, a moderate level.</Text>
           <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• Bone health at 60%, a moderate level.</Text>
        </View>
      </View>

    

    </ScrollView>
  );
}