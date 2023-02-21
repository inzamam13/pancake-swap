import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";

const index = ({
  label,
  price,
  changePercent,
  ratioLabel,
  ratio,
  volumeLabel,
  volume,
  status = false,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{label}</Text>
        <Text style={styles.headerValue}>{price}</Text>
      </View>
      <View style={styles.changeContainer}>
        {status && (
          <Ionicons
            name={status ? "ios-caret-up" : "ios-caret-down"}
            size={12}
            color={status ? "green" : "red"}
          />
        )}

        <Text
          style={[
            styles.changePercent,
            { color: status === null ? "gray" : status ? "green" : "red" },
          ]}
        >
          {changePercent}
        </Text>
      </View>
      <View style={styles.ratioContainer}>
        <View style={styles.ratioRow}>
          <Text style={styles.ratioLabel}>{ratioLabel}</Text>
          <Text style={styles.ratioValue}>{ratio}</Text>
        </View>
        <View style={styles.ratioRow}>
          <Text style={styles.ratioLabel}>{volumeLabel}</Text>
          <Text style={styles.ratioValue}>{volume}</Text>
        </View>
      </View>
    </View>
  );
};

export default index;
