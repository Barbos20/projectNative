import React, { useCallback, useState } from "react";
import { useFonts } from "expo-font";
import { StyleSheet, SafeAreaView, Text } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { Menu, HamburgerIcon, Box, Pressable } from "native-base";
import { GenreList } from "./ListBooks";

SplashScreen.preventAutoHideAsync();

function HeaderMenu() {
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
    <Box alignItems="center">
      <Menu
        onLayout={onLayoutRootView}
        w="270"
        style={styles.menu}
        trigger={(triggerProps) => {
          return (
            <Pressable accessibilityLabel="More options menu" {...triggerProps}>
              <HamburgerIcon style={styles.box} />
            </Pressable>
          );
        }}
      >
        <SafeAreaView>
          <Menu.Group title="Витрина книг">
            {GenreList.map((book) => (
              <Menu.Item key={book.genre}>
                <Text style={styles.text}>{book.genre}</Text>
              </Menu.Item>
            ))}
          </Menu.Group>
          <Menu.Group title="Информация">
            <Menu.Item>
              <Text style={styles.text}>Правила пользования</Text>
            </Menu.Item>
            <Menu.Item>
              <Text style={styles.text}>Договор оферты</Text>
            </Menu.Item>
          </Menu.Group>
        </SafeAreaView>
      </Menu>
    </Box>
  );
}

export default HeaderMenu;

const styles = StyleSheet.create({
  box: {
    color: "#363636",
    height: 24,
    width: 24,
    marginRight: 26,
  },
  text: {
    fontSize: 16,
    fontFamily: "MB",
    fontStyle: "normal",
    fontWeight: 400,
    lineHeight: 24,
    color: "#363636",
    letterSpacing: 0.1,
  },
  menu: {
    marginTop: 26,
  },
});
