import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "../styles";
import AuthContext from "../AuthContext";

export default function AccountSubScreen({ navigation }) {
  const { setLoggedIn } = React.useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>AccountSubScreen</Text>
      <Button title="Log out" onPress={() => setLoggedIn(false)} />
    </View>
  );
}
