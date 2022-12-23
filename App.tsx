import React, { useCallback } from "react";
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import { AppRoutes } from "./src/routes/app.routes";
import { View } from "react-native";

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
    <GestureHandlerRootView style={{ flex: 1 }}>
      {isFontsLoaded() ? (
        <ThemeProvider theme={theme}>
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer>
        </ThemeProvider>
      ) : (
        <View>SplashScreen.preventAutoHideAsync()</View>
      )}
    </GestureHandlerRootView>
  );
}
