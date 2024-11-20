import { Text, Image, ScrollView, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import overallHealthStyle from '../../stylesheet/overallHealthStyle';
import mainStyles from '../../stylesheet/mainStyle';
import BottomNav from '../../component/progressBar';
import { Ionicons } from '@expo/vector-icons';
import overallHealthStyles from '../../stylesheet/overallHealthStyle';

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
      <Text style={mainStyles.heading1}>My Insight</Text>
      <Text style={[mainStyles.paragraph, overallHealthStyle.overallOverviewParagraph]}>View a summary of your long-term health trends, including overall bone health, activity levels, and progress over time.</Text>

      {/*View Log Button*/}
      <View style={mainStyles.buttonContainer}>
        <TouchableOpacity style={[mainStyles.button2, overallHealthStyles.dailyLogButton]} onPress={""}>
          <View style={mainStyles.buttonContent}>
            <Text style={mainStyles.buttonText}>View Daily Log</Text>
            <Ionicons name="calendar-clear-sharp" size={24} color="white" style={mainStyles.buttonIcon}/>
          </View>
        </TouchableOpacity>
      </View>

      {/* Header */}
        <Text style={[mainStyles.heading1, overallHealthStyle.boneHealthScoreHeading]}>Bone Health Score</Text>

      {/* Description */}
      <Text style={mainStyles.paragraph}>
        This assessment evaluates the overall quality of your bone to see how effectively you can prevent the progression of osteoporosis.
      </Text>

      {/* Circular Score */}
      <View style={styles.scoreContainer}>
        <View style={styles.circle}>
          <Text style={mainStyles.heading1}>38</Text>
          <Text style={mainStyles.paragraph}>out of 100</Text>
        </View>
      </View>

      {/* Encouragement Message */}
      <Text style={[mainStyles.heading3, styles.encouragement]}>
        Great start! Keep going!
      </Text>

      

      {/*Exercise Result */}
      <View style={[mainStyles.dailyContainer,overallHealthStyle.dailyContainer]}>
        <View style={overallHealthStyle.dailyTitleContainer}>
          <Text style={[mainStyles.heading2, overallHealthStyle.dailyTitle]}>Exercise</Text>
          <Text style={[mainStyles.caption, overallHealthStyle.dailyCaption]}>20/20 mins</Text>
        </View>
        
        <View style={mainStyles.iconAndBarContainer}>
          <View style={mainStyles.iconContainer}>
            <Text style={overallHealthStyle.resultNumber}>100%</Text>
          </View>
          <View style={mainStyles.fullBar}>
            <View style={mainStyles.progessBar} />
          </View>
        </View>

        <View style={mainStyles.listContainer}>
          <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• 12 minutes of outdoor walks</Text>
         <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• 4 minutes of yoga</Text>
           <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• 4 minutes of tai chi</Text>
        </View>
      </View>

       {/*Calcium Result */}
       <View style={[mainStyles.dailyContainer,overallHealthStyle.dailyContainer]}>
        <View style={overallHealthStyle.dailyTitleContainer}>
          <Text style={[mainStyles.heading2, overallHealthStyle.dailyTitle]}>Calcium</Text>
          <Text style={[mainStyles.caption, overallHealthStyle.dailyCaption]}>0/1000 mg</Text>
        </View>
        
        <View style={mainStyles.iconAndBarContainer}>
          <View style={mainStyles.iconContainer}>
            <Text style={overallHealthStyle.resultNumber}>0%</Text>
          </View>
          <View style={mainStyles.fullBar2}>
            <View style={mainStyles.progessBar2} />
          </View>
        </View>

        <View style={mainStyles.listContainer}>
          <Text style={[mainStyles.paragraph,overallHealthStyle.noStatus]}>Don’t Forget To Take Your Calcium.</Text>
        </View>
      </View>

       {/*Vitamin D Result */}
       <View style={[mainStyles.dailyContainer,overallHealthStyle.dailyContainer]}>
        <View style={overallHealthStyle.dailyTitleContainer}>
          <Text style={[mainStyles.heading2, overallHealthStyle.dailyTitle]}>Vitamin D</Text>
          <Text style={[mainStyles.caption, overallHealthStyle.dailyCaption]}>0/600 IU</Text>
        </View>
        
        <View style={mainStyles.iconAndBarContainer}>
          <View style={mainStyles.iconContainer}>
            <Text style={overallHealthStyle.resultNumber}>0%</Text>
          </View>
          <View style={mainStyles.fullBar2}>
            <View style={mainStyles.progessBar2} />
          </View>
        </View>

        <View style={mainStyles.listContainer}>
          <Text style={[mainStyles.paragraph,overallHealthStyle.noStatus]}>Don’t Forget To Take Your Vitamin D.</Text>
        </View>

      </View>

       {/*Protein Result */}
       <View style={[mainStyles.dailyContainer,overallHealthStyle.dailyContainer]}>
        <View style={overallHealthStyle.dailyTitleContainer}>
          <Text style={[mainStyles.heading2, overallHealthStyle.dailyTitle]}>Protein</Text>
          <Text style={[mainStyles.caption, overallHealthStyle.dailyCaption]}>0/100g</Text>
        </View>
        
        <View style={mainStyles.iconAndBarContainer}>
          <View style={mainStyles.iconContainer}>
            <Text style={overallHealthStyle.resultNumber}>0%</Text>
          </View>
          <View style={mainStyles.fullBar2}>
            <View style={mainStyles.progessBar2} />
          </View>
        </View>

        <View style={mainStyles.listContainer}>
          <Text style={[mainStyles.paragraph,overallHealthStyle.noStatus]}>Don’t Forget To Take Your Protein.</Text>
        </View>
      </View>

    

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  scoreContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
    marginLeft: -20,
  },
  circle: {
    width: 150,
    height: 150,
    borderRadius: 75, // Make it circular
    borderWidth: 10,
    borderColor: '#FFCC57', // Golden yellow for the circle
    alignItems: 'center',
    justifyContent: 'center',
  },
  encouragement: {
    textAlign: 'center',
    fontWeight: '500',
    color: '#001B62', 
  },
});