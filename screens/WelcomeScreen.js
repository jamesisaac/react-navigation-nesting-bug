import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "../styles";

export default function WelcomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>WelcomeScreen</Text>
      <Button
        title="Go to LoginScreen"
        onPress={() => navigation.navigate("Login")}
      />
    </View>
  );
}
