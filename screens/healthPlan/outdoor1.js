import { Text, Image, ScrollView, View, TouchableOpacity, ActivityIndicator, StyleSheet } from 'react-native';
import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold, Poppins_700Bold } from '@expo-google-fonts/poppins';

import mainStyles from '../../stylesheet/mainStyle';
import healthPlanStyles from '../../stylesheet/healthPlanStyle';

import React, { useEffect, useState } from "react";
import { username } from "../../config.js";

import { Ionicons } from '@expo/vector-icons';
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';

import { useNavigation, useRoute } from '@react-navigation/native'; 


export default function App() {

  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  const navigation = useNavigation(); 
  const route = useRoute();

  const exerciseTime = route.params?.exerciseTime || 0;

  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch weather data from GeoNames API
  const fetchWeather = async () => {
    console.log(username);
    try {
      const response = await fetch(
        `http://api.geonames.org/findNearByWeatherJSON?lat=49.19&lng=-123.17&username=${"Frentzen100"}`
      );
      const data = await response.json();

      if (response.ok) {
        setWeather(data.weatherObservation);
      } else {
        setError("Failed to fetch weather");
      }
    } catch (err) {
      setError(err.message || "Failed to fetch weather");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather();
  }, []);

  if (loading) {
    return (
      <View style={mainStyles.container}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }

  return (
    <ScrollView style={[mainStyles.container]}>
       <Image
            source={require('../../assets/images/outdoor.png')} 
            style={mainStyles.topImage}
      />
      <View style={mainStyles.buttonContainer}>
        <TouchableOpacity style={mainStyles.backButton} onPress={() => navigation.navigate('Home', { screen: 'HealthPlan' })}>
          <View style={mainStyles.buttonContent}>
            <AntDesign name="arrowleft" size={24} color="#7887B0" />
            <Text style={mainStyles.backButtonText}>Back </Text>
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

        <View style={healthPlanStyles.exerciseStatusContainer}>
            <View style={healthPlanStyles.weatherContentContainer}>
                <Text style={[mainStyles.whiteParagraph, healthPlanStyles.exerciseStatusText]}>
                {weather.clouds.includes("rain") ? "Bad for Exercise" : "Good for Exercise"}
                </Text>
                <Ionicons
                name={weather.clouds.includes("rain") ? "thumbs-down-sharp" : "thumbs-up-sharp"}
                size={24}
                color={weather.clouds.includes("rain") ? "#EF3017" : "#84DD54"}
                />
            </View>
        </View>

        {weather && (
            <View style={healthPlanStyles.weatherStatusContainer}>
            <Ionicons
                name={
                weather.clouds.includes("rain") ? "rainy-sharp" :
                weather.clouds === "clear" ? "sunny-sharp" :
                "cloudy-sharp"
                }
                size={80}
                color="black"
                style={healthPlanStyles.weatherIcon}
            />
            <View style={healthPlanStyles.weatherInformationContainer}>
                <View style={healthPlanStyles.weatherTopInformationContainer}>
                <Text style={mainStyles.heading2}>Weather</Text>
                <Text style={mainStyles.paragraph}>
                    {new Date().toLocaleTimeString([], { hour: 'numeric', minute: 'numeric', hour12: true })}
                </Text>
                </View>
                <Text style={mainStyles.paragraph}>
                {
                    weather.clouds === "clear" ? "Sunny" :
                    weather.clouds === "few clouds" || weather.clouds === "scattered clouds" ? "Partly Cloudy" :
                    weather.clouds === "overcast" ? "Cloudy" :
                    weather.clouds.includes("rain") ? "Rainy" :
                    weather.clouds 
                }
                </Text>
                <Text style={mainStyles.paragraph}>
                {weather.temperature}°C
                </Text>
            </View>
            </View>
        )}


        <View style={healthPlanStyles.instructionContainer}>
            <Text style={[mainStyles.heading1,healthPlanStyles.instructionTitle]}>Instructions</Text>
            <Text style={mainStyles.paragraph}>
            Walk for 6 minutes, then take a short break. After resting, walk back for another 6 minutes.      
            </Text>
        </View>

        <View style={healthPlanStyles.postureContainer}>
            <Text style={mainStyles.heading1}>
            Check Your Posture
            </Text>
            <View style={mainStyles.listContainer}>
            <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• Stand tall with feet forward.</Text>
            <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• Neck aligned with your shoulders. </Text>
            <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• Keep your head up.</Text>
            <Text style={[mainStyles.paragraph, mainStyles.bulletItem]}>• Move forward smoothly without swaying your hips side-to-side..</Text>
            </View>
        </View>

        <View style={mainStyles.bottomButtonContainer}>
            <TouchableOpacity style={mainStyles.bottomButton} onPress={() => navigation.navigate("Outdoor2", { exerciseTime: route.params?.exerciseTime })} >
            <View style={mainStyles.buttonContent}>
                <Text style={[mainStyles.whiteCaption, healthPlanStyles.exerciseStatusText]}>Begin Walk & Track Location </Text>
                <Feather name="arrow-right" size={24} color="white" />
            </View>
            </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}