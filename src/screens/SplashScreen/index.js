import { Image, LogBox, Text, View } from "react-native";
import React, { useEffect } from "react";

import styles from "./styles";

export default function ({ navigation }) {
  LogBox.ignoreAllLogs()
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("BottomTabNavigator");
    }, 2000);
  }, []);
  return (
    <View style={styles.main}>
        <Image style={{ width: '80%', height: '20%', alignSelf: 'center' }} source={require('../../assets/images/icon.webp')} resizeMode='contain' />
    </View>
  );
}
