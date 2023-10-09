// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyBudgetForm from "./app/pages/BudgetForm";

import MyList from "./app/pages/List";
import { persistor, store } from "./app/redux/store";
import { PersistGate } from "redux-persist/lib/integration/react";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Budget Entry 💰" component={MyBudgetForm} />
            <Stack.Screen name="List" component={MyList} />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    marginTop: 50,
  },

  heading: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
});
