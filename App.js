import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";

import { v4 as uuidv4 } from "uuid";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    if(goalTitle.length === 0){
      return;
    }
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: uuidv4(), value: goalTitle },
    ]);
    setIsAddMode(false);
  };

  const removeGoalHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.button}>
        <Button title="add new" onPress={() => setIsAddMode(true)} />
      </View>
      <GoalInput
        visible={isAddMode}
        onAddGoal={addGoalHandler}
        onCancel={cancelGoalAdditionHandler}
      />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            title={itemData.item.value}
            id={itemData.item.id}
            onDelete={removeGoalHandler}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: "gold",
  },
  button: {
    width: "100%",
    paddingHorizontal: 10,
    paddingBottom: 5,
  },
});
