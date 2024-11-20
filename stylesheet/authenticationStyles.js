import { StyleSheet } from 'react-native';

//------ stylesheet for home screen ------
const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2FF', 
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    color: '#001B62', 
    fontSize: 30,
    marginTop: 130,
    marginBottom: 20,
  },
  paragraph: {
    fontFamily: 'Poppins_500Medium',
    textAlign: 'center',
    color: '#001B62', 
    fontSize: 16,
    marginBottom: 200, 
  },
  buttonContainer: {
    width: '90%', 
    justifyContent: 'space-between',
    height: 140, 
    marginBottom: 270,
  },
  button: {
    backgroundColor: '#001B62', 
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
    height: 60, 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    textAlign: 'center',
  },
});


//------ stylesheet for create account screen ------
const createAccountStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2FF', 
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#001B62', 
    fontSize: 30,
    marginBottom: 50,
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 15,
    alignItems: 'center',
  },
  label: {
    fontSize: 16,
    width: 120,
    fontFamily: 'Poppins_500Medium',
    color: '#001B62', 
    marginBottom: 10,
    alignSelf: 'flex-start', 
    paddingLeft: 20, 
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#808DB0',
    backgroundColor: '#fff',
    color: '#001B62', 
    padding: 10,
    borderRadius: 10,
    fontSize: 14,
    fontFamily: 'Poppins_400Regular',
    height: 50,
  },
  passwordContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    borderWidth: 1,
    borderColor: '#808DB0',
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 10,
    height: 50,
  },
  passwordInput: {
    flex: 1,
  },
  button: {
    backgroundColor: '#001B62', 
    width: '90%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 30,
    height: 60, 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 14,
    fontFamily: 'Poppins_500Medium',
    textAlign: 'center',
  },
  termsContainer: {
    flexDirection: 'row', 
    justifyContent: 'center', 
  },
  agreementText: {
    fontFamily: 'Poppins_500Medium',
    color: '#001B62',
    fontSize: 14,
    width: '90%',
  },
  linkText: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#F0F2FF', 
    padding: 20,
    borderRadius: 10,
    width: '100%',
  },
  modalTitle: {
    fontFamily: 'Poppins_600SemiBold',
    textAlign: 'center',
    color: '#001B62', 
    fontSize: 30,
    marginTop: 80,
    marginBottom: 20,
  },
  modalParagraph: {
    fontFamily: 'Poppins_500Medium',
    textAlign: 'center',
    color: '#001B62', 
    fontSize: 16,
  },
  closeButton: {
    backgroundColor: '#001B62', 
    width: '90%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 30,
    height: 60, 
    alignSelf: 'center',
  },
  closeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row', 
  },
  footerText: {
    fontFamily: 'Poppins_500Medium',
    color: '#001B62',
    fontSize: 14,
  },
});

//------ stylesheet for confirmation screen ------
const confirmationStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  pageTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#001B62',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 6,
    elevation: 5, // Android shadow
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#001B62',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalMessage: {
    fontSize: 16,
    color: '#6c757d',
    textAlign: 'center',
    marginBottom: 20,
  },
  continueButton: {
    backgroundColor: '#001B62',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  continueButtonText: {
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
});

//------ stylesheet for user info screen ------
const userInfoStyle = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F2FF', 
  },
  backButton: {
    position: 'absolute',
    top: 60,
    left: 30,
  },
  title: {
    fontFamily: 'Poppins_600SemiBold',
    color: '#001B62', 
    fontSize: 30,
    marginTop: 130,
    marginBottom: 50,
  },
  input: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#808DB0',
    backgroundColor: '#fff',
    color: '#001B62', 
    padding: 10,
    borderRadius: 10,
    fontSize: 16,
    fontFamily: 'Poppins_400Regular',
    height: 50,
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    width: 200,
    fontFamily: 'Poppins_500Medium',
    color: '#001B62', 
    marginBottom: 10,
    alignSelf: 'flex-start', 
    paddingLeft: 20, 
  },
  genderContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start', 
    flexWrap: 'wrap', 
    marginBottom: 30,
  },
  genderButton: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 130,
    height: 120,  // Larger button
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#8495C0',
    backgroundColor: '#fff', 
    marginRight: 40, 
  },
  selectedButton: {
    backgroundColor: '#001B62',
  },
  buttonTextDefault: {
    color: '#8495C0',
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
    marginLeft: 2,
  },
  buttonTextSelected: {
    color: '#fff',
    fontFamily: 'Poppins_400Regular',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#001B62', 
    width: '90%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    marginBottom: 50,
    height: 60, 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16,
    fontFamily: 'Poppins_500Medium',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 0,
    width: '90%',
  },
  weightInput: {
    flex: 1,
  },
  heightInput: {
    flex: 1,
  },
  unitButtons: {
    flexDirection: 'row',
    marginLeft: 10,
    marginBottom: 20,
    justifyContent: 'space-between',
  },
  unitButton: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#8495C0',
    padding: 10,
    borderRadius: 8,
    marginLeft: 5,
  },
})


export { homeStyle, createAccountStyle, userInfoStyle, confirmationStyle };
