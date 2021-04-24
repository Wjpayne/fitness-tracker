import React, { useState } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Text } from "react-native-elements";
import { ModalAdd } from "./ModalAdd";

export const Profile = () => {

    const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress = {() => setModalVisible(true)}style={styles.button}>
          <Text style={styles.textButton}>ADD A WORKOUT</Text>
        </TouchableOpacity>
        <ModalAdd modalVisible = {modalVisible} setModalVisible = {setModalVisible} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "black",
    height: "100%",
    flexDirection: "column",
  },
  headerContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 40,
  },

  button: {
    backgroundColor: "#ffcc00",
    margin: "10%",
    width: 150,
    height: 50,
    justifyContent: "center",
    borderRadius: 10
  },

  textButton: {
    textAlign: "center",
  },
});
