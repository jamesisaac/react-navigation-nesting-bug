import React from "react";
import AuthContext from "./AuthContext";
import RootModalStackNavigator from "./navigation/RootModalStackNavigator";
import MainStackNavigator from "./navigation/MainStackNavigator";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{ loggedIn, setLoggedIn }}>
        <RootModalStackNavigator loggedIn={loggedIn} />

        {/* This would work, but loses ability to create modals: */}
        {/* <MainStackNavigator loggedIn={loggedIn} /> */}
      </AuthContext.Provider>
    </NavigationContainer>
  );
}
