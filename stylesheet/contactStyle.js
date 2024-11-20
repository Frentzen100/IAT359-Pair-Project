import { StyleSheet } from 'react-native';

const contactStyles = StyleSheet.create({
    overallOverviewParagraph:{
        marginTop: 10,
        marginBottom: 70,
    },
    
    personContainer: {
        marginTop: 30,
        width: '95%',
    },

   contactPersonContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
    paddingTop: 20,
    marginBottom: -20,
  },
  contactPersonFirstInitial: {
    backgroundColor: '#21325E',
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
    width: 40,
    height: 40,
    borderRadius: 20,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginRight: 10,
    paddingTop: 6,
    overflow: 'hidden',
  },
  contactDetailsContainer: {
    flexDirection: 'row', 
    alignItems: 'center', 
    flex: 1, 
  },
  contactPersonName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#21325E',
  },
  contactPersonJob: {
    fontSize: 14,
    color: '#7A8398',
    marginLeft: 5, 
  },


  /*---------------------Add Contact -----------------------------*/
  inputContactContainer:{
    marginTop: 50,
  },

  inputProfileIcon:{
    textAlign: 'center', // This will center the icon inside the container
    marginTop: 10,
    marginBottom: 10,
  },

  noContactStatus:{
    marginTop: 50,
    fontSize: 20,
    textAlign: 'center',
    color: '#001B6280',
    marginLeft: -10,
  },

  inputProfilePhoto:{
    width: 200,
    height: 200,
    margin: 'auto',
    borderRadius: 100,    
    overflow: 'hidden',   
  },

  contactPersonPhoto:{
    width: 50,
    height: 50,
    marginRight: 20,
    borderRadius: 100,    
  },

});

export default contactStyles;