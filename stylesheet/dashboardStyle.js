import { StyleSheet } from 'react-native';

const dashBoardStyles = StyleSheet.create({

  /*-------------------------------Profile Container ---------------------------------------*/
  profileContainer: {
    flexDirection: 'row',
    marginTop: 25,
  },

  profileInfoContainer: {
    transform: [{ translateX: 20 }, { translateY: 70}]
  },

  editContainer: {
    flexDirection: 'row',
    marginTop: 4,
  },

  editIcon: {
    marginLeft: 10,
  },

  /*----------------------------------Popup ---------------------------------------------*/
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', 
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalText: {
    fontSize: 17,
    textAlign: 'center',
    color: '#333',
    marginTop: 20,
    marginBottom: 15,
  },

  modalTextCountdown:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  
  closeButton: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  closeButtonText: {
    fontSize: 30,
    color: '#333',
    marginLeft: -25,
    marginTop: -5,
  },

  /*-------------------------------Dashboard Overview Container ---------------------------------------*/
  dashboardContainer: {
    marginTop: 30,
  },

  dashboardHeadingContainer: {
    flexDirection: 'row',
  },

  infoIcon: {
    marginLeft: 10,
  },

  date: {
    marginTop: 10,
    marginBottom: 10,
  },

  metricHeading: {
    marginTop: 30,
    marginBottom: 10,
  },

  /*-------------------------------Daily Task Container ---------------------------------------*/
  taskHeader: {
    flexDirection: 'row', 
    alignItems: 'center',
    justifyContent: 'space-between', 
    marginBottom: 10, 
  },

  taskProgress: {
    marginLeft: 10, 
  },

  viewLogs: {
    marginLeft: 10,
  },

  fullBar2: {
    position: 'absolute',
    width: '100%',
    height: 20,
    borderRadius: 10,
    backgroundColor: '#EA874080',
  },

  progessBar2: {
    position: 'absolute',
    width: '0%',
    height: 20,
    borderRadius: 10,
    backgroundColor: '#EA8740',
    opacity: '100%',
  },

  fullBar3: {
    position: 'absolute',
    width: '100%',
    height: 20,
    borderRadius: 10,
    backgroundColor: '#92ED61',
  },

  progessBar3: {
    position: 'absolute',
    width: '95%',
    height: 20,
    borderRadius: 10,
    backgroundColor: '#92ED61',
    opacity: '100%',
  },

  taskIcon:{
    width: 50,
    height: 50,
  },

  /*-------------------------------Feeling and Emotion Container ---------------------------------*/
  feelingContainer: {
    marginTop: 57,
  },


  feelingParagraph: {
    marginTop: 10,
    marginBottom: 30,
  },

  emojiContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    flexWrap: 'wrap',
    width: '100%',
    marginLeft: -30,
    paddingLeft: 25,
    paddingRight: 25,
    width: '115%',
    flex: 1,
  },

  singleEmojiContainer: {
    width: '30%',
    marginLeft: -5,
    marginBottom: 60,
    alignItems: 'center', 
    justifyContent: 'center', 
    paddingTop: 5,
    paddingBottom: 5,

  },

  emojiIcon: {
    textAlign: 'center',
  },

  emojiLabel: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 5,
  },

  selectedEmoji: {
    backgroundColor: '#F0F2FF', 
    borderRadius: 8,
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4, 
  },



 



   /*------------------------------Pain Container ---------------------------------------*/
  painContainer: {
    marginTop: 57,
  },

  painGridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', // Adjust spacing between images
    width: '95%',
  },

  painSelectionContainer:{
    width: '30%',
  },

  painImage:{
    width: 100,
    height: 100,
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#001B6280',
    borderRadius: 5,
  },

  painLabel: {
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    marginTop: 5,
  },

  selectedPain: {
    opacity: 0.7,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 4,
    borderColor: '#001B6280', 
  },

  /*-------------------------------Notification Container ---------------------------------------*/
  // New styles for notification message box

  selectedEmojiMessage:{
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10
  },

  selectedPainMessage:{
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 10
  },

  notificationContainer: {
    backgroundColor: '#F0F0F0', // Light grey background
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    position: 'relative',
    marginTop: -40,
    marginBottom: 30,
    
  },
  notificationText: {
    color: '#333',
    fontSize: 12,
    marginBottom: 8,
  },

  closeButton: {
    position: 'absolute',
    top: 8,
    right: 8,
  },
  dontShowAgainContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#888',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 8,
  },
  checkboxChecked: {
    width: 12,
    height: 12,
    backgroundColor: '#888', 
  },
  dontShowAgainText: {
    color: '#666',
    fontSize: 12,
  },

});

export default dashBoardStyles;
