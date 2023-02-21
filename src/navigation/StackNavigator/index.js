import { ActivityIndicator, View } from "react-native";
import React, { useEffect, useState } from "react";

import BottomTabForFutureTrading from "../BottomTabForFutureTrading";
import BottomTabNavigator from "../BottomTabNavigator";
import SplashScreen from "../../screens/SplashScreen";
import api from "../../services/api";
import { colors } from "../../utils/colors";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function () {
  const [checkTrading, setCheckTrading] = useState(false)
  const [checkLoader, setCheckLoader] = useState(false)

  useEffect(() => {
    checkFuturetrading()
  }, [])

  const checkFuturetrading = async () => {
    setCheckLoader(true)
    console.log('Tppp')
    let res = await api("https://cryp-coin-tracker-server.herokuapp.com/screenEnabling/get/by/appId/" + "pancakeswap", null, "get")
    setCheckTrading(res.spotTrading)
    setCheckLoader(false)
  }
  return (
    <>
      {
        checkLoader ?
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <ActivityIndicator size={'large'} color={colors.colorBlack} />
          </View>
          :
          checkTrading ?
            <Stack.Navigator
              screenOptions={{ headerShown: false }}>
              <Stack.Screen name="BottomTabForFutureTrading" component={BottomTabForFutureTrading} />
            </Stack.Navigator>
            :
            <Stack.Navigator
              initialRouteName={"SplashScreen"}
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen name="SplashScreen" component={SplashScreen} />
              <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
            </Stack.Navigator>
      }
    </>
  );
}
