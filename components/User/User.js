import React from "react";
import { StyleSheet, View, Image } from "react-native";

export const User = () => {
  return (
    <View>
      <Image source={require("./utils/avatar.png")} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    height: 50,
    width: 50,
  },
});
