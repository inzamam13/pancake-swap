import { ActivityIndicator, Image, ScrollView, TouchableOpacity, View } from 'react-native'
import {
    BarChart,
    ContributionGraph,
    LineChart,
    PieChart,
    ProgressChart,
    StackedBarChart
} from "react-native-chart-kit";
import React, { Component } from 'react'

import AntDesign from "react-native-vector-icons/AntDesign"
import HeaderB from '../../components/HeaderB'
import LatoText from '../../components/LatoText';
import api from '../../services/api'
import { colors } from '../../utils/colors';
import moment from 'moment'
import { wp } from '../../services/helpers';

const array = [
    { coinName: "Bitcoin", nickName: "BTC", price: "$323.1 billion", toCheck: "bitcoin" },
    { coinName: "Ethereum", nickName: "ETH", price: "$148.0 billion", toCheck: "ethereum" },
    { coinName: "Tether", nickName: "USDT", price: "$66.2 billion", toCheck: "tether" },
    { coinName: "U.S. Dollar Coin", nickName: "USDC", price: "$44.5 billion", toCheck: "usd-coin" },
    { coinName: "Binance Coin", nickName: "BNB", price: "$39.8 billion", toCheck: "binancecoin" },
    { coinName: "Binance USD", nickName: "BUSD", price: "$18.34 billion", toCheck: "binance-usd" },
    { coinName: "XRP", nickName: "XRP", price: "$17.3 billion", toCheck: "ripple" },
    { coinName: "Dogecoin", nickName: "DOGE", price: "$9.78 billion", toCheck: "dogecoin" },
    { coinName: "Cardano", nickName: "ADA", price: "$8.9 billion", toCheck: "cardano" },
    { coinName: "Polygon", nickName: "MATIC", price: "$6.9 billion", toCheck: "matic-network" },
]
const coinArray = ["bitcoin", "ethereum", "tether", "usd-coin", "binancecoin", "binance-usd", "ripple", "dogecoin", "cardano", "matic-network"]

class FutureTrading extends Component {
    constructor(props) {
        super(props)

        this.state = {
            coinData: null,
            days: [],
            numbers: [],
            coinName: props.route.params?.coinName || "bitcoin"
        }
    }

    async componentDidMount() {
        this.getData()
        let sub = this.props.navigation.addListener("focus", async () => {
            this.getData()
        })
    }

    getData = async () => {
        let from = moment().subtract(1, "weeks").format("X")
        let to = moment().format("X")

        let arr = []
        for (let index = 0; index < 7; index++) {
            arr.unshift(moment().subtract(index, "days").format("ddd"))
        }

        let res = await api("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&sparkline=true", null, "get")
        console.log("Resss",res)
        let fil = res.find(f => f.id === this.state.coinName)
        this.setState({ coinData: fil, days: arr })
        let numm = fil?.sparkline_in_7d?.price
        let days = []
        let num = 24
        for (let i = 0; i < numm.length; i++) {
            if (numm[num]) {
                days.push(numm[num])
                num = num + 24
            }
        }
        this.setState({ numbers: days })
    }
    render() {
        let { coinData, numbers } = this.state

        return (
            (coinData && numbers?.length) ?
                <View style={{ flex: 1, backgroundColor: "#fff", }} >
                    <HeaderB navigation={this.props.navigation}   title={"Future Trading"} />
                    <ScrollView>
                        <ScrollView horizontal={true} contentContainerStyle={{ height: 50, paddingLeft: 20 }} >
                            {
                                array.map((item, index) =>
                                    <TouchableOpacity onPress={() => this.setState({ coinName: coinArray[index] }, () => this.getData())} key={index} style={{ flexDirection: "row", alignItems: "center", marginHorizontal: 15, borderBottomWidth: this.state.coinName?.toUpperCase() === item.toCheck?.toUpperCase() ? 1 : 0, borderColor: colors.primary }} >
                                        <LatoText text={item.nickName} />
                                        <AntDesign name="arrowright" size={16} color="black" />
                                        <LatoText text={"USD"} />
                                    </TouchableOpacity>
                                )
                            }
                        </ScrollView>
                        <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: 20, marginTop: 30 }} >
                            <View style={{ flexDirection: "row", alignItems: "center" }} >
                                <Image style={{ width: 30, height: 30,}} source={{ uri: coinData?.image }} />
                                <LatoText text={coinData?.symbol?.toUpperCase()}  fontSize={18} marginLeft={10} marginRight={10} />
                                <LatoText text={coinData?.name}  fontSize={18} />
                            </View>
                            <LatoText text={"$ " + coinData?.current_price}  fontSize={20} marginLeft={10} marginRight={10} />
                        </View>
                        <LineChart
                            data={{
                                labels: this.state.days,
                                datasets: [
                                    {
                                        data: this.state.numbers
                                    }
                                ]
                            }}
                            // data={{
                            //     labels: this.state.days,
                            //     // labels: ["Mon", "Sun"],
                            //     datasets: [
                            //         {
                            //             data: this.state.data
                            //             // data: this.state.data.filter((f, i) => i < 20)
                            //         }
                            //     ]
                            // }}
                            width={wp(100)} // from react-native
                            height={220}
                            // yAxisLabel="$"
                            // yAxisSuffix="k"
                            yAxisInterval={6} // optional, defaults to 1
                            chartConfig={{
                                paddingLeft: 20,
                                backgroundColor: colors.primary,
                                backgroundGradientFrom: "#fff",
                                backgroundGradientTo: "#fff",
                                decimalPlaces: 0, // optional, defaults to 2dp
                                color: (opacity = 1) => `#EE6855`,
                                labelColor: (opacity = 1) => `${"#000"}`,
                                style: {
                                    borderRadius: 16,
                                },
                                propsForDots: {
                                    r: "3",
                                    strokeWidth: "2",
                                    stroke: "white"
                                }
                            }}
                            bezier
                            style={{
                                marginVertical: 8,
                                borderRadius: 12,
                                marginTop: 50
                            }}
                        />

                        <LatoText text={"Estimated purchase value"} color={colors.grey} marginLeft={20} marginTop={20} />
                        <LatoText text={"$" + coinData?.current_price} color={colors.colorBlack} marginLeft={20} fontSize={22} marginTop={5} />

                        <View style={{ borderBottomWidth: 1, borderColor: colors.lightGrey, marginTop: 10 }} />
                    </ScrollView>
                </View>
                :
                <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }} >
                    <ActivityIndicator size="small" color={'#FCD63D'} />
                </View>
        )
    }
}

export default FutureTrading