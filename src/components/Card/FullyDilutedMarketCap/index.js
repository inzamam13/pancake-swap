import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const index = ({ label, price, changePercent, tvl }) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{label}</Text>
        <Text style={styles.headerValue}>{price}</Text>
      </View>
      <View style={styles.changeContainer}>
        <Ionicons name="ios-caret-down" size={12} color="red" />
        <Text style={styles.changePercent}>{changePercent}</Text>
      </View>
      <View style={styles.ratioContainer}>
        <View style={styles.ratioRow}>
          <Text style={styles.ratioLabel}>{`Total Value Locked (TVL)`}</Text>
          <Text style={styles.ratioValue}>{tvl}</Text>
        </View>
      </View>
    </View>
  );
};

export default index;
