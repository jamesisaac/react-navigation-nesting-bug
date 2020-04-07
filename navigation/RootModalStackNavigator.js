import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContext from "../AuthContext";
import MainStackNavigator from "./MainStackNavigator";
import ModalScreen from "../screens/ModalScreen";

const Stack = createStackNavigator();

export default function RootModalStackNavigator() {
  const { loggedIn } = React.useContext(AuthContext);
  return (
    <Stack.Navigator mode="modal">
      <Stack.Screen name="MainStackNavigator" component={MainStackNavigator} />
      {loggedIn && <Stack.Screen name="Modal" component={ModalScreen} />}
    </Stack.Navigator>
  );
}
