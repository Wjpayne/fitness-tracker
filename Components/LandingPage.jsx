import React from "react";
import {
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
} from "react-native";
import { Text, Icon, Image, Button } from "react-native-elements";

export const LandingPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Icon
          color="#ffcc00"
          style={styles.text}
          name="md-fitness"
          size={80}
          type="ionicon"
        />
        <Text style={styles.text} h4>
          Welcome to Fitness Tracker
        </Text>
        <Text style={styles.text} h5>
          An app for tracking fitness goals and meal planning
        </Text>
        <TouchableOpacity style={styles.button} onPress = {() => navigation.navigate("Profile")}>
          <Text style={styles.textButton}>ENTER</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
  },
  headerContainer: {
    
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },

  text: {
    color: "#ffcc00",
    textAlign: "center",
  },
  button: {
    backgroundColor: "#ffcc00",
    margin: "10%",
    width: 250,
    height: 50,
    justifyContent: "center",
    borderRadius: 10
    
  },

  textButton: {
    textAlign: "center",
  },
});
