import {
  Alert,
  Image,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { IMAGE_BG, IMAGE_BG2 } from "../../../constants";
import React, { useState } from "react";
import { _height_screen, _width_screen } from "../../../utils/dimensions";

import Header from "../../../components/Header";
import RewardCard from "../../../components/Card/RewardCard";
import TextInput from "../../../components/TextInput";
import { colors } from "../../../utils/colors";
import styles from "./styles";

export default function (props) {
  const [amount, setAmount] = useState(0);
  const [liquidity, setLiquidity] = useState(null);
  const [totalLiquidity, setTotalLiquidity] = useState(1000000);
  const [poolPercentage, setPoolPercentage] = useState(0);

  const [reward, setReward] = useState(null);

  const _handleCalculate = () => {
    if (liquidity && amount) {
      const TL = parseFloat(totalLiquidity);
      const L = parseFloat(liquidity);
      const AMT = parseFloat(amount);
      let poolPercentage = (L / TL) * 100;
      setPoolPercentage(poolPercentage);
      console.log("Pool Percentage ", poolPercentage);
      const result = (AMT * poolPercentage) / TL;
      setReward(result);
      console.log("Result====>", result);
    } else {
      Alert.alert("All fields are Required");
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header title={"Pool Calculator"} />
      {reward ? (
        <View style={styles.topContainer}>
          <RewardCard
            reward={reward * 10000}
            amount={totalLiquidity}
            pool={true}
            percentage={poolPercentage}
          />
        </View>
      ) : (
        <Image
          source={IMAGE_BG2}
          style={{
            width: _width_screen,
            height: _height_screen * 0.25,
            resizeMode: "contain",
            alignSelf: "center",
            marginTop: "2.5%",
          }}
        />
      )}

      <View style={[styles.bottomContainer, { flex: reward ? 0.65 : 1 }]}>
        <Text style={styles.title}>{`Calculate your pool reward`}</Text>
        <TextInput
          placeholder={`Total Amount of reward `}
          value={amount}
          onChangeText={setAmount}
          keyboardType={"numeric"}
          label={"Total Number of Rewards"}
        />
        <TextInput
          placeholder={`Enter Your Liquidity`}
          value={liquidity}
          keyboardType={"numeric"}
          onChangeText={setLiquidity}
          label={"Your Liquidity"}
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
