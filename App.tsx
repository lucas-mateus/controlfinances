import React, { useCallback } from "react";
import { StatusBar } from "react-native";
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import "intl";
import "intl/locale-data/jsonp/pt-BR";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import { AuthProvider } from "./src/hooks/auth";
import { Routes } from "./src/routes";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
  });

  const isFontsLoaded = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      {isFontsLoaded() ? (
        <ThemeProvider theme={theme}>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" translucent />
            <AuthProvider>
              <Routes />
            </AuthProvider>
          </GestureHandlerRootView>
        </ThemeProvider>
      ) : (
        SplashScreen.preventAutoHideAsync()
      )}
    </>
  );
}
