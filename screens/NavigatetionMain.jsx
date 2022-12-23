import React from "react";
import { View } from "react-native";

import { NativeRouter, Route } from "react-router-native";
import { HomeScreen } from "./HomeScreen";

export const NavigatetionMain = () => {
  return (
      <NativeRouter>
        <View>
          <Text>11111</Text>
        </View>
      </NativeRouter>
  );
};

// const styles = StyleSheet.create({
//   container: {
//     marginTop: 25,
//     padding: 10,
//   },
//   header: {
//     fontSize: 20,
//   },
//   nav: {
//     flexDirection: "row",
//     justifyContent: "space-around",
//   },
//   navItem: {
//     flex: 1,
//     alignItems: "center",
//     padding: 10,
//   },
//   subNavItem: {
//     padding: 5,
//   },
//   topic: {
//     textAlign: "center",
//     fontSize: 15,
//   },
// });
