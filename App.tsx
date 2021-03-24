import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {lightTheme, darkTheme} from "./src/styles/theme";
import {ThemeProvider} from "styled-components/native";
import layout from "./src/styles/layout";
import {
  SafeAreaView, SafeAreaProvider,
} from 'react-native-safe-area-context';
import CardScreen from "./src/CardScreen/CardScreen";

const {Root} = layout;

const App = () => {
  const [theme, setTheme] = useState(lightTheme);
  const changeTheme = () => {
    const nextTheme = (theme.themeName === "light") ? darkTheme : lightTheme;
    setTheme(nextTheme);
  };
  const statusBarStyle = (theme.themeName === "light") ? "auto" : "dark";
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: theme.pageHeaderBackground}}>
        <ThemeProvider theme={theme}>
          <Root>
            <CardScreen />
            <StatusBar style={statusBarStyle} />
          </Root> 
        </ThemeProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
