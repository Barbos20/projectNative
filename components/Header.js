import React, { useCallback } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import HeaderMenu from "./HeaderMenu";
import { User } from "./User/User";

SplashScreen.preventAutoHideAsync();

export const Header = () => {
  const [fontsLoaded] = useFonts({
    MB: require("../assets/fonts/Montserrat-Bold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);
  if (!fontsLoaded) {
    return null;
  }

  return (
    <SafeAreaView style={styles.main} onLayout={onLayoutRootView}>
      <SafeAreaView style={styles.leftSide}>
        <HeaderMenu />
        <Text style={styles.text}>Библиотека</Text>
      </SafeAreaView>
      <User />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  main: {
    height: 76,
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftSide: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontFamily: "MB",
    fontStyle: "normal",
    fontWeight: 700,
    lineHeight: 28,
    color: "#363636",
  },
});
