import React, { memo } from "react";
import { Text, View } from "react-native";
import styles from "./styles";

function index({ reward, amount }) {
  return (
    <View style={styles.container}>
      <View style={styles.rewardContainer}>
        <Text style={styles.rewardTitle}>{`Your Reward`}</Text>
        <Text style={styles.reward}>{`$${reward}`}</Text>
      </View>
      <View style={styles.bottomContentContainer}>
        <View style={styles.rowView}>
          <Text style={styles.textTitle}>{`APY`}</Text>
          <Text style={styles.textValue}>{`45%`}</Text>
        </View>
        <View style={styles.rowView}>
          <Text style={[styles.textTitle]}>{`Staked Amount`}</Text>
          <Text style={styles.textValue}>{`$ ${amount}`}</Text>
        </View>
      </View>
    </View>
  );
}

export default memo(index);
