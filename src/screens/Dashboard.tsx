import { View, Text, StyleSheet } from "react-native";
import React from "react";

export function Dashboard() {
  return (
    <View style={styles.container}>
      <Text>Dashboard</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
