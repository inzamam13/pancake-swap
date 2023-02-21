import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { _height_screen, _width_screen } from "../../../utils/dimensions";

import Header from "../../../components/Header";
import { IMAGE_BG } from "../../../constants";
import RewardCard from "../../../components/Card/RewardCard";
import TextInput from "../../../components/TextInput";
import { colors } from "../../../utils/colors";
import styles from "./styles";

export default function (props) {
  const [amount, setAmount] = useState(0);
  const [period, setPeriod] = useState(null);
  const [reward, setReward] = useState(null);

  const _handleCalculate = () => {
    if (period && amount) {
      let apy = 0.45 / 365;
      const result = amount * period * apy;
      setReward(result);
      console.log(result);
    } else {
      Alert.alert("All fields are Required");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Staking Reward Calculator"} />
      {reward ? (
        <View style={styles.topContainer}>
          <RewardCard reward={reward?.toFixed(2)} amount={amount} />
        </View>
      ) : (
        <Image
          source={IMAGE_BG}
          style={{
            width: _width_screen,
            height: _height_screen * 0.158,
            resizeMode: "contain",
            alignSelf: "center",
          }}
        />
      )}

      <View style={[styles.bottomContainer, { flex: reward ? 0.65 : 1 }]}>
        <Text style={styles.title}>{`Calculate Your Stake Reward`}</Text>
        <TextInput
          placeholder={`Enter Staked Amount`}
          value={amount}
          onChangeText={setAmount}
          keyboardType={"numeric"}
          label={"Staked Amount"}
        />
        <TextInput
          placeholder={`Enter Duration`}
          value={period}
          keyboardType={"numeric"}
          onChangeText={setPeriod}
          label={"Duration of Staking periods (In Days)"}
        />
        <TouchableOpacity
          style={styles.calculateButton}
          onPress={_handleCalculate}
        >
          <Text style={styles.buttonText}>{"Calculate"}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
