import React from "react";
import { SafeAreaView, ScrollView, Text, View } from "react-native";
import Header from "../../../components/Header";
import styles from "./styles";
import { LineChart } from "react-native-chart-kit";
import { _height_screen, _width_screen } from "../../../utils/dimensions";
import { colors } from "../../../utils/colors";
import MarketCapSummary from "../../../components/Card/MarketCapSummary";
import FullyDilutedMarketCap from "../../../components/Card/FullyDilutedMarketCap";

import { Ionicons } from "@expo/vector-icons";
export default function (props) {
  const data = {
    labels: ["12 AM", "4 AM", "8 AM", "12 PM", "4 PM", "8 PM"],
    datasets: [
      {
        data: [1.5, 2.0, 2.5, 2.3, 2.6, 2.1],
      },
    ],
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header title={"Live Summary"} />
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={{ width: "100%", padding: "5%" }}>
          <Text style={styles.topHeading}>{`PancakeSWAP Price (CAKE)`}</Text>
          <View style={styles.rowView}>
            <Text style={styles.price}>{`$3.90`}</Text>
            <View style={styles.percentageContainer}>
              <Ionicons name="ios-caret-down" size={12} color="white" />
              <Text style={styles.percentage}>{`8.29%`}</Text>
            </View>
          </View>
        </View>
        <LineChart
          data={data}
          width={_width_screen}
          height={_height_screen * 0.3}
          yAxisLabel="$"
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: colors.purple,
            backgroundGradientTo: colors.headingColor,
            decimalPlaces: 2,
            color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            style: {
              borderRadius: 16,
            },
          }}
          bezier
        />
        <MarketCapSummary
          label={`Market Cap`}
          price={`$654,521,455`}
          changePercent={`8.29%`}
          ratioLabel={`Market Cap / TVL Ratio`}
          ratio={0.2647}
          volumeLabel={`24h Volume / Market Cap`}
          volume={0.1037}
        />
        <FullyDilutedMarketCap
          label={`Market Fully Diluted Market Cap`}
          price={`$2,949,164,351`}
          changePercent={`5.94%`}
          tvl={`$2,460,189,763`}
        />
        <MarketCapSummary
          label={`Volume (24h)`}
          price={`$70,450,913`}
          status={true}
          changePercent={`123.12%`}
          ratioLabel={`CEX Vol`}
          ratio={`$57,822,450`}
          volumeLabel={`DEX Vol`}
          volume={`$9,137,670`}
        />
        <MarketCapSummary
          label={`Circulating Supply`}
          price={`166,413,017 CAKE`}
          status={null}
          changePercent={`22%`}
          ratioLabel={`Max Supply`}
          ratio={`750,000,000`}
          volumeLabel={`Total Supply`}
          volume={`366,858,290`}
        />
      </ScrollView>
    </SafeAreaView>
  );
}
