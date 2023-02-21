import React from "react";
import { View, Text, StatusBar } from "react-native";
import { colors } from "../../utils/colors";
import styles from "./styles";
export default function ({ title }) {
  return (
    <View style={styles.headerContainer}>
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={colors.headingColor}
      />
      <Text style={styles.headerTitle}>{title}</Text>
    </View>
  );
}
