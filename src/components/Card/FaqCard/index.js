import React, { memo, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import { colors } from "../../../utils/colors";

function index({ question, answer }) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
        <View style={styles.questionContainer}>
          <Text style={styles.question}>{question}</Text>
          <Ionicons
            name={isExpanded ? "ios-chevron-up" : "ios-chevron-down"}
            size={20}
            color={colors.headingColor}
          />
        </View>
      </TouchableOpacity>
      {isExpanded && <Text style={styles.answer}>{answer}</Text>}
    </View>
  );
}

export default memo(index);
