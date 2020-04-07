import React from "react";
import { Text, View, Button } from "react-native";
import { styles } from "../styles";

export default function AccountMainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>AccountMainScreen</Text>
      <Button
        title="Go to AccountSubScreen"
        onPress={() => navigation.navigate("AccountSub")}
      />
    </View>
  );
}
