import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

import AddressInfo from "../../screens/BottomNavigation/AddressInfo";
import Faqs from "../../screens/BottomNavigation/Faqs";
import FutureTrading from "../FutureTrading/FutureTrading";
import LivePrice from "../../screens/BottomNavigation/LivePrice";
import LiveSummary from "../../screens/BottomNavigation/LiveSummary";
import PoolCalculator from "../../screens/BottomNavigation/PoolCalculator";
import React from "react";
import StakingReward from "../../screens/BottomNavigation/StakingReward";
import { colors } from "../../utils/colors";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function () {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarHideOnKeyboard: true,

                tabBarActiveTintColor: colors.headingColor,
                tabBarInactiveTintColor: "gray",
                headerShown: false,
                tabBarIcon: ({ focused, color, size }) => {
                    let iconName;

                    if (route.name === "FutureTrading") {
                        iconName = "wallet";
                    }
                    else if (route.name === "AddressInfo") {
                        iconName = "wallet";
                    } else if (route.name === "Faqs") {
                        iconName = "help-circle";
                    } else if (route.name === "LiveSummary") {
                        iconName = "chart-bar";
                    } else if (route.name === "StakingReward") {
                        iconName = "calculator";
                    } else if (route.name === "Pool Calculator") {
                        iconName = "clipboard-list";
                      }

                    // You can return any component that you like here!
                    return (
                        <MaterialCommunityIcons name={iconName} size={size} color={color} />
                    );
                },
            })}
        >
            <Tab.Screen
                name="FutureTrading"
                component={FutureTrading}
                options={{ headerShown: false, tabBarLabel: "Earning" }}
            />
            <Tab.Screen
                name="StakingReward"
                component={StakingReward}
                options={{ headerShown: false, tabBarLabel: "Reward" }}
            />
            <Tab.Screen
                name="Pool Calculator"
                component={PoolCalculator}
                options={{ headerShown: false, tabBarLabel: "Pool" }}
            />
            <Tab.Screen
                name="LiveSummary"
                component={LiveSummary}
                options={{ headerShown: false, tabBarLabel: "Live Summary" }}
            />
            <Tab.Screen
                name="AddressInfo"
                component={AddressInfo}
                options={{ headerShown: false, tabBarLabel: "Address" }}
            />
            <Tab.Screen
                name="Faqs"
                component={Faqs}
                options={{ headerShown: false, tabBarLabel: "FAQs" }}
            />
        </Tab.Navigator>
    );
}
