import React, { useState } from "react";
import { View, Button, Alert } from "react-native";
import { Text, TextInput } from "react-native-paper";
import { useDispatch } from "react-redux";
import { addToList } from "../redux/action";
import { Toast } from "react-native-toast-message/lib/src/Toast";

const MyBudgetForm = ({ navigation }) => {
  const [name, setName] = useState("");
  const [plannedAmount, setPlannedAmount] = useState("");
  const [actualAmount, setActualAmount] = useState("");
  const dispatch = useDispatch();

  const clearFields = () => {
    setName((name) => "");
    setPlannedAmount((amount) => "");
    setActualAmount((amount) => "");
  };

  const handleSave = () => {
    const data = {
      name: name,
      plannedAmount: plannedAmount,
      actualAmount: actualAmount,
    };
    Toast.show({
      type: "success",
      text1: " Saved ✔️",
      text2: `Added ${name} your Budget Item to the List!`,
    });
    dispatch(addToList(data));
    clearFields();
  };

  const handleShow = () => {
    navigation.navigate("List");
  };

  const handleTextChangeActual = (inputText) => {
    const numericValue = inputText.replace(/[^0-9]/g, "");
    setActualAmount(numericValue);
  };

  const handleTextChangePlanned = (inputText) => {
    const numericValue = inputText.replace(/[^0-9]/g, "");
    setPlannedAmount(numericValue);
  };

  return (
    <View style={styles.form}>
      <TextInput
        mode="outlined"
        label="Name"
        value={name}
        onChangeText={(text) => setName(text)}
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Planned Amount"
        value={plannedAmount}
        onChangeText={handleTextChangePlanned}
        keyboardType="numeric"
        style={styles.input}
      />
      <TextInput
        mode="outlined"
        label="Actual Amount"
        value={actualAmount}
        onChangeText={handleTextChangeActual}
        keyboardType="numeric"
        style={styles.input}
      />
      <Button style={styles.button} title="Save" onPress={handleSave} />
      <Text> </Text>
      <Button title="Show" onPress={handleShow} />
      <Toast position="top" topOffset={10} />
    </View>
  );
};

const styles = {
  input: {
    marginBottom: 10,
  },
  button: {
    marginBottom: 10,
    padding: 5,
  },
  form: {
    marginTop: 50,
    padding: 50,
  },
};

export default MyBudgetForm;
