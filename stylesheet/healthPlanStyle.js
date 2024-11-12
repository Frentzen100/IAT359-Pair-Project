import { StyleSheet } from 'react-native';

const healthPlanStyles = StyleSheet.create({

  overallPlanParagraph:{
    marginTop: 5,
    marginBottom: 80,
  },

  overallExerciseParagraph:{
  },

  exerciseContainer: {
    backgroundColor: '#001B6220',
    paddingLeft: 15,
    paddingTop: 15,
    borderRadius: 5,
    marginTop: 20,
    width: '95%',
  },

  exerciseSubContainer:{
    width: '100%',
  },

  exerciseImage: {
    width: '95%',
    height: 100,
    borderRadius: 5,
    marginBottom: 5,
  },

  exerciseTotalTime: {
    color: '#7887B0',
  },

  viewMoreContainer:{
    flexDirection: 'column', // Stack elements vertically if needed
    alignItems: 'center', // Center child elements horizontally
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderColor: 'red',
    marginBottom: 15,
    width: '95%',
    marginTop: 5,
  },

  healthTitle:{
    marginTop: 80,
  },

  prescriptionContainer:{
    marginTop: 80,
    width: '95%',
  },

  prescriptionHeadingContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
  },

  prescriptionNoteContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10, 
    paddingTop: 20, 
    borderRadius: 8, 
    
    //Android shadow
    elevation: 5, 
    // iOS shadow
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 }, 
    shadowOpacity: 0.25, 
    shadowRadius: 3.84, 
  },
  noteTextContainer: {
    flex: 1, 
    paddingRight: 10, 
  },
  noteTitle: {
    fontSize: 12, 
    marginBottom: 20, 
  },
  noteSubtitle: {
    fontSize: 10, 
    marginBottom: 4,
  },
  noteInstructions: {
    fontSize: 11,
  },
  imageContainer: {
    width: 100,
    height: 100, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  noteImage: {
    width: '100%',
    height: '100%', 
    resizeMode: 'contain', 
  },

  /*-----------------------Sub-Section: Outdoor -------------------------*/
  outdoorContainer:{
    width: '95%',
    flex: 1,
  },

  outdoorTopContainer: {
    paddingTop: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 5,
  },

  exerciseStatusContainer:{
    marginTop: 50,
    marginLeft: 10,
  },

  exerciseStatusText:{
    marginRight: 10
  },

  instructionContainer:{
    marginTop: 50,
  },

  instructionTitle:{
    marginBottom: 10,
  },

  postureContainer:{
    marginTop: 50,
  },



  /*-----------------------Sub-Section: Weather -------------------------*/

  weatherStatusContainer: {
    marginTop: -125,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F1F5F9',
    padding: 16,
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
  },
  weatherIcon: {
    marginRight: 16,
  },
  weatherInformationContainer: {
    flex: 1,
  },
  weatherTopInformationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 4,
  },

    /*-----------------------Sub-Section: Map -------------------------*/

    map:{
      width: '100%',
      height: 400,
      transform: [{ translateX: 0 }, { translateY: -130}]
    }


 



});

export default healthPlanStyles;