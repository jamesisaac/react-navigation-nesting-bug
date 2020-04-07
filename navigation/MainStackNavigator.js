import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthContext from "../AuthContext";
import WelcomeScreen from "../screens/WelcomeScreen";
import LoginScreen from "../screens/LoginScreen";
import AccountMainScreen from "../screens/AccountMainScreen";
import AccountSubScreen from "../screens/AccountSubScreen";

const Stack = createStackNavigator();

export default function RootModalStackNavigator() {
  const { loggedIn } = React.useContext(AuthContext);
  return (
    <Stack.Navigator>
      {!loggedIn ? (
        <>
          <Stack.Screen name="Welcome" component={WelcomeScreen} />
          <Stack.Screen name="Login" component={LoginScreen} />
        </>
      ) : (
        <>
          <Stack.Screen name="AccountMain" component={AccountMainScreen} />
          <Stack.Screen name="AccountSub" component={AccountSubScreen} />
        </>
      )}
    </Stack.Navigator>
  );
}
