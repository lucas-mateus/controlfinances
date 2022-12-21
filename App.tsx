import React, { useCallback } from "react";
import { ThemeProvider } from "styled-components";
import * as SplashScreen from "expo-splash-screen";
import { NavigationContainer } from "@react-navigation/native";

import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import theme from "./src/global/styles/theme";
import { AppRoutes } from "./src/routes/app.routes";

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
          <NavigationContainer>
            <AppRoutes />
          </NavigationContainer>
        </ThemeProvider>
      ) : (
        SplashScreen.preventAutoHideAsync()
      )}
    </>
  );
}
