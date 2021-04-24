import React from "react";
import { Pressable, View, StyleSheet, Text, Modal, TextInput } from "react-native";


export const ModalAdd = ({modalVisible, setModalVisible}) => {
 
  return (
    <View style={styles.container}>
      <Modal
        transparent={true}
        animationType="slide"
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}
      >
        <View style={styles.container}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Workout Details</Text>
            <TextInput style = {styles.textInput} placeholder = "Workout Name" ></TextInput>
            <TextInput style = {styles.textInput} placeholder = "# of reps" ></TextInput>
            <TextInput style = {styles.textInput} placeholder = "Time Elapsed" ></TextInput>
            <TextInput style = {styles.textInput} placeholder = "Description" ></TextInput>
            <TextInput style = {styles.textInput} placeholder = "Notes" ></TextInput>
            <Pressable
              onPress={() => setModalVisible(!modalVisible)}
              style={styles.button}
            >
              <Text style={styles.textStyle}>Submit</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },

  textInput: {
    backgroundColor: "black",
    borderRadius: 10,
    width: 275,
    textAlign: "center",
    color: "#ffcc00",
    margin: 10,
    height: 30
  }
});
