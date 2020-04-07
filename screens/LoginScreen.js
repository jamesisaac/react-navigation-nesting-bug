import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "../styles";
import AuthContext from "../AuthContext";

export default function LoginScreen() {
  const { setLoggedIn } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>LoginScreen</Text>
      <Button title="Log in" onPress={() => setLoggedIn(true)} />
    </View>
  );
}
