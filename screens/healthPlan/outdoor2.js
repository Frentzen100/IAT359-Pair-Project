import * as Location from "expo-location";
import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, Image } from "react-native";
import MapView, { Marker } from 'react-native-maps';
import { Ionicons } from 'react-native-vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'; 
import AntDesign from '@expo/vector-icons/AntDesign';
import mainStyles from '../../stylesheet/mainStyle';
import healthPlanStyles from '../../stylesheet/healthPlanStyle';

export default function Outdoor2() {
  const [location, setLocation] = useState(null); // User's current location
  const [randomLocation, setRandomLocation] = useState(null); // Flag's random location
  const [errorMsg, setErrorMsg] = useState(null);

  const navigation = useNavigation(); 
  const route = useRoute();

  const exerciseTime = route.params?.exerciseTime || 0;

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let loc = await Location.getCurrentPositionAsync({});
      if (loc) {
        setLocation({
          latitude: loc.coords.latitude,
          longitude: loc.coords.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.015,
        });
        generateRandomLocation(loc.coords);
      } else {
        setErrorMsg("Current location not obtained");
      }
    })();
  }, []);

  // Function to generate a random location 500 meters away
  const generateRandomLocation = (coords) => {
    const randomAngle = Math.random() * 2 * Math.PI; // Random direction in radians
    const randomDistance = 500; // meters

    // Calculate latitude and longitude offsets
    const latOffset = randomDistance / 111320; // Convert meters to latitude degrees
    const lonOffset = randomDistance / (111320 * Math.cos(coords.latitude * (Math.PI / 180))); // Adjust for longitude at the current latitude

    // Generate new random location
    const randomLat = coords.latitude + latOffset * Math.sin(randomAngle);
    const randomLon = coords.longitude + lonOffset * Math.cos(randomAngle);

    setRandomLocation({
      latitude: randomLat,
      longitude: randomLon,
    });
  };

  const handleNavigateToOutdoor3 = () => {
    // Swap locations and pass them to Outdoor3
    navigation.navigate('Outdoor3', {
      location: randomLocation,  // Pass random location as the user's "current" location
      randomLocation: location,  // Pass current location as the flag's location
      exerciseTime
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Image
        source={require('../../assets/images/outdoor.png')} 
        style={mainStyles.topImage}
      />
      <View style={mainStyles.buttonContainer}>
        <TouchableOpacity style={mainStyles.backButton} onPress={() => navigation.navigate('Outdoor1')}>
          <View style={mainStyles.buttonContent}>
            <AntDesign name="arrowleft" size={24} color="#7887B0" />
            <Text style={mainStyles.backButtonText}>Back</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={healthPlanStyles.outdoorContainer}>
        <View style={healthPlanStyles.outdoorTopContainer}>
          <Text style={[mainStyles.heading1, healthPlanStyles.date]}>Outdoor Walk</Text>
          <Text style={mainStyles.heading3}> {exerciseTime} mins </Text>
          </View>
        <Text style={mainStyles.paragraph}>
          Track your location while walking outdoors and get personalized route suggestions for your exercise. 
        </Text>
      </View>

      {location && randomLocation ? (
        <MapView
          provider={MapView.PROVIDER_GOOGLE}
          style={healthPlanStyles.map}
          region={location}
          showsMyLocationButton
          showsUserLocation
        >
          {/* User's Location Marker */}
          <Marker coordinate={location} title="You are here" />
          
          {/* Flag Marker */}
          <Marker coordinate={randomLocation} title="Flag Location">
            <Ionicons
              name="flag-sharp" // Ionicons flag icon
              size={30}
              color="red" // Flag color
            />
          </Marker>
        </MapView>
      ) : (
        <Text>Loading...</Text>
      )}

      <TouchableOpacity style={mainStyles.disableBottomButton2} onPress={handleNavigateToOutdoor3}>
        <View style={mainStyles.buttonContent}>
          <Text style={[mainStyles.buttonText3, healthPlanStyles.exerciseStatusText]}>Finish Exercise</Text>
        </View>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  map: {
    width: "100%",
    height: "80%",
  },
});
