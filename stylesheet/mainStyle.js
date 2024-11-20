import { StyleSheet } from 'react-native';

const mainStyles = StyleSheet.create({

  container: {
    backgroundColor: '#F0F3FF', // Light background color to match the image
    paddingLeft: 30,
    flex: 1,
    paddingRight: 10,
    
  },

  /*------------Typography ---------------*/

  heading1: {
    fontSize: 30,
    fontFamily: 'Poppins_600SemiBold',
    color: '#001B62',
  },

  heading2: {
    fontSize: 26,
    fontFamily: 'Poppins_500Medium',
    color: '#001B62', 
  },

  heading3: {
    fontSize: 20,
    fontFamily: 'Poppins_600SemiBold',
    color: '#001B62',
  },

  heading4: {
    fontSize: 20,
    fontFamily: 'Poppins_400Regular',
    color: '#001B62',
    fontWeight: 400
  },

  paragraph: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#001B62',
  },

  accompanyText: {
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    color: '#001B62',
  },

  labelText: {
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    color: '#001B62',
  },


  whiteParagraph: {
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    color: '#F0F2FF', 
  },

  caption: {
    fontSize: 14,
    color: '#001B62', 
    fontFamily: 'Poppins_400Regular',
  },

  whiteCaption: {
    fontSize: 14,
    color: '#F0F2FF', 
    fontFamily: 'Poppins_400Regular',

  },

  /*------------Progress Container ---------------*/

  iconAndBarContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },

  taskIcon: {
    position: 'absolute',
    zIndex: 1,
  },

   checkIcon:{
    position: 'absolute',
    right: 0,
    paddingBottom: 5,
  },

  fullBar: {
    position: 'absolute',
    width: '100%',
    height: 20,
    borderRadius: 10,
    backgroundColor: '#92ED6180',
  },

  progessBar: {
    position: 'absolute',
    width: '100%',
    height: 20,
    borderRadius: 10,
    backgroundColor: '#92ED61',
    opacity: 1,
  },

  fullBar2: {
    position: 'absolute',
    width: '100%',
    height: 20,
    borderRadius: 10,
    backgroundColor: '#EAB44080',
  },

  progessBar2: {
    position: 'absolute',
    width: '0%',
    height: 20,
    borderRadius: 10,
    backgroundColor: '#EAB440',
    opacity: 1,
  },

  /*----------------------Button Container -------------------*/
  buttonContainer: {
    justifyContent: 'center', 
    alignItems: 'center',
    width: '92%',
  },

  bottomButtonContainer:{
    marginTop: 30,
    alignItems: 'center',
    width: '92%',
    paddingBottom: 300,
    // position: 'absolute',
    // bottom: 0,
    // transform: [{ translateX: 0 }, { translateY: 100}]
  },

   button2: {
    backgroundColor: '#001B62',
    borderRadius: 10,
    justifyContent: 'center',
    width: '75%', 
    height: 60, 
  },

  button3: {
    backgroundColor: '#001B62',
    borderRadius: 10,
    justifyContent: 'center',
    width: '35%', 
    height: '140%', 
  },

  button4: {
    backgroundColor: '#001B62',
    borderRadius: 10,
    justifyContent: 'center',
    width: '45%', 
    height: '20%',
  },

  button5: {
    backgroundColor: '#001B62',
    borderRadius: 10,
    justifyContent: 'center',
    width: 150, 
    height: 50,
    marginTop: 20,
  },

  backButton: {
    backgroundColor: '#F0F2FF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#7887B0',
    justifyContent: 'center',
    width: 94, 
    height:30, 
    color: '#7887B0',
    position: 'absolute',
    transform: [{ translateX: -140 }, { translateY: -50 }]
  },

  bottomButton: {
    backgroundColor: '#001B62',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%', 
    height: 60, 
    position: 'absolute',
  },

  bottomButton2:{
    backgroundColor: '#001B62',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%', 
    height: 60, 
    transform: [{ translateX: 0 }, { translateY: 325 }],
    position: 'absolute',
  },
  
  disableBottomButton2:{
    backgroundColor: '#001B6220',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    width: '75%', 
    height: 60, 
    transform: [{ translateX: 0 }, { translateY: 325 }],
    position: 'absolute',
  },

  buttonContent: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'center',
  },

  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'regular',
    textAlign: 'center',
    marginRight: 10, 
  },

  buttonText2: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'regular',
    textAlign: 'center',
    marginRight: 10, 
  },

  buttonText3: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'regular',
    textAlign: 'center',
    marginRight: 10, 
  },

  backButtonText: {
    color: '#001B62',
    marginLeft: 12,
  },

  cameraButton: {
    width: 150, 
    height: 50,
    backgroundColor: '#001B62',
    borderRadius: 10,
    alignItems: 'center', 
    justifyContent: 'center', 

  },

  /*--------------------Daily Container--------------------*/
  dailyContainer: {
  backgroundColor: '#F3F5FF',
  borderRadius: 10,
  padding: 16,
  marginTop: 30,
  width: '95%',

  //Android shadow
  elevation: 5, 
  // iOS shadow
  shadowColor: '#000', 
  shadowOffset: { width: 0, height: 2 }, 
  shadowOpacity: 0.25, 
  shadowRadius: 3.84, 
  },

  /*--------------------List Container--------------------*/
  listContainer: {
    marginTop: 15,
    marginLeft: 15,
  },

  bulletItem: {
    marginBottom: 5,
  },

  /*--------------------Other Icons---------------------*/
  heroIcon: {
    width: 45,
    height: 45,
    marginTop: 60,
    marginBottom: 30,
  },

  buttonIcon: {
    marginLeft: 6,
  },

  bottomTabIcon:{
    width: 30,
    height: 30,
  },

  checkIcon:{
    transform: [{ translateX: 310}, { translateY: 0}]
  },

  taskIconSize:{
    width: 25,
    height: 25,
    transform: [{ translateX: 4}, { translateY: -4}]
  },

  /*------------Image ---------------*/

  topImage: {
    width: '120%',
    marginLeft: -30,
    height: 125,
  },

  placeholderImage: {
    width: '100%',
    height: 200,
    marginTop: 10,
    borderColor: '#C0C7E0',
    borderWidth: 2,
  },

  /*----------------Input---------------------*/
  input1: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#2c3e50',
    borderWidth: 1,
    borderColor: '#dcdcdc',
    marginBottom: 10,
  },


 /*---------------------Other--------------------*/
  link: {
    textDecoration: 'underline',
  },

  iconContainer: {
    backgroundColor: '#001B62',
    borderRadius: 100,
    padding: 8,
    marginRight: 16,
    zIndex: 1,
    paddingVertical: 15, // Add vertical padding
    overflow: 'hidden',    
  },

});

export default mainStyles;