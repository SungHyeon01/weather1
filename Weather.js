import React from "react";
import { View, Text, StyleSheet, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";

const weatherOptions = {
  Thunderstorm: {
    iconName: "weather-lighting",
    gradient: ["#CCCCB2", "#757519"],
    title: "Thunderstorm",
    subTitle: "Be careful as thunder strikes.",
  },
  Drizzle: {
    iconName: "weather-hail",
    gradient: ["#74ebd5", "#ACB6E5"],
    title: "Drizzle",
    subTitle: "Drizzle is falling!",
  },
  Rain: {
    iconName: "weather-rainy",
    gradient: ["#667db6", "#0082c8", "#0082c8", "#667db6"],
    title: "Rain",
    subTitle: "It's raining, so bring an umbrella.",
  },
  Snow: {
    iconName: "weather-snowy",
    gradient: ["#FFEFBA", "#FFFFFF"],
    title: "Snow",
    subTitle: "It's snowing. Be careful not to slip.",
  },
  Atmosphere: {
    iconName: "weather-hazy",
    gradient: ["#009FFF", "#ec2F4B"],
    title: "Atmosphere",
    subTitle: "See the atmosphere!",
  },
  Clear: {
    iconName: "weather-sunny",
    gradient: ["#C6FFDD", "#FBD786", "#f7797d"],
    title: "Clear",
    subTitle: "It's a sunny day",
  },
  Clouds: {
    iconName: "weather-cloudy",
    gradient: ["#bdc3c7", "#2c3e50"],
    title: "Clouds",
    subTitle: "It's a cloudy day",
  },
};

export default function Weather({ temp, condition }) {
  return (
    <LinearGradient
      colors={weatherOptions[condition].gradient}
      style={styles.container}
    >
      <StatusBar barStyle="light-content" />
      <View style={styles.halfContainer}>
        <MaterialCommunityIcons
          size={110}
          name={weatherOptions[condition].iconName}
          color="white"
        />
        <Text style={styles.temp}>{temp}°</Text>
      </View>
      <View style={{ ...styles.halfContainer, ...styles.textContainer }}>
        <Text style={styles.titleText}>{weatherOptions[condition].title}</Text>
        <Text style={styles.subTitleText}>
          {weatherOptions[condition].subTitle}
        </Text>
      </View>
    </LinearGradient>
  );
}

Weather.propTypes = {
  temp: PropTypes.number.isRequired,
  condition: PropTypes.oneOf([
    "Thunderstorm",
    "Drizzle",
    "Rain",
    "Snow",
    "Atmosphere",
    "Clear",
    "Clouds",
  ]).isRequired,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  temp: {
    fontSize: 55,
    color: "white",
  },
  halfContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  titleText: {
    fontWeight: "300",
    fontSize: 53,
    color: "white",
    marginBottom: 10,
  },
  subTitleText: {
    fontWeight: "600",
    fontSize: 42,
    color: "white",
  },
  textContainer: {
    paddingHorizontal: 20,
    alignItems: "flex-start",
  },
});
