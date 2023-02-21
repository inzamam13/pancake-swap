import { Text, TextInput, View } from "react-native";

import React from "react";
import { colors } from "../../utils/colors";
import styles from "./styles";

export default function ({
  placeholder,
  onChangeText,
  value,
  label,
  editable = true,
  keyboardType = "default",
  borderColor = colors.headingColor,
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          { color: editable ? "black" : "gray", borderColor: borderColor },
        ]}
        editable={editable}
        value={value}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        placeholder={placeholder}
        returnKeyType={'done'}
      />
    </View>
  );
}
