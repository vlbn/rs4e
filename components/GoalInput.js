import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Modal } from "react-native";

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState("");
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  const addGoalHandler = () => {
    props.onAddGoal(enteredGoal);
    setEnteredGoal("");
  };
  return (
    <Modal visible={props.visible} animationType={"slide"}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="write something"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <View style={styles.buttonContainer}>
          <Button title="cancel" color="red" onPress={props.onCancel} />
          <Button title="add" onPress={addGoalHandler} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: "80%",
    marginVertical: 10,
    padding: 10,
    margin: 30,
    borderWidth: 1,
  },
  button: {
    width: "100%",
    margin: 10,
    padding: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  container: {
    flex: 1,
    backgroundColor: "gold",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default GoalInput;
