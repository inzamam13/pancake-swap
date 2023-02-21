import { Image, TouchableOpacity, View } from 'react-native'

import AntDesign from "react-native-vector-icons/AntDesign"
import Feather from "react-native-vector-icons/Feather"
import FontAwesome from "react-native-vector-icons/FontAwesome"
import LatoText from './LatoText'
import React from 'react'
import { colors } from '../utils/colors'
import { wp } from '../services/helpers'

export default function Header({ detail, title, leftArrow, leftDrawerIcon, leftBackWithText, navigation, onMapPress, rightPlus, rightEdit, onEditPress, rightFilter, onFilterPress }) {
    let rem = 70 
    return (
        <View style={{ width: "100%", flexDirection: "row", alignItems: "center", justifyContent: "space-between", height: 100, backgroundColor: "#fff", paddingTop: 20 }} >
            <View style={{ zIndex: 1, paddingLeft: 20, flexDirection: "row", alignItems: "center", }} >
                {
                    leftArrow ?
                        <TouchableOpacity onPress={() => navigation.goBack()} >
                            <Feather name="arrow-left" size={30} color={colors.primary} />
                        </TouchableOpacity>
                        :
                        leftDrawerIcon ?
                            <TouchableOpacity onPress={() => navigation.openDrawer()} style={{ flexDirection: "row", alignItems: "center" }} >
                                <FontAwesome name='bars' size={30} color={'#fff'} />
                                <LatoText text={leftDrawerIcon} marginLeft={15}  fontSize={18} color={'#fff'} />
                            </TouchableOpacity>
                            :
                            leftBackWithText ?
                                <TouchableOpacity activeOpacity={0.7} onPress={() => navigation.goBack()} style={{ flexDirection: "row", alignItems: "center" }} >
                                    <Feather name="arrow-left" size={30} color={"#fff"} />
                                    <LatoText text={leftBackWithText} marginLeft={15}  fontSize={18} color={"#fff"} />
                                </TouchableOpacity>
                                :
                                <LatoText text={""} />

                }
            </View>
            <View style={{ position: "absolute", width: "100%", alignItems: "center", paddingTop: 20 }} >
                {
                    title &&
                    <LatoText text={title || "SIGN UP"} color={"#000"}  fontSize={20} />
                }
            </View>
            <View style={{ paddingRight: 20 }} >

                <View style={{ flexDirection: "row", alignItems: "center" }} >
                    {
                        rightPlus &&
                        <>
                            <TouchableOpacity onPress={rightPlus} style={{ marginRight: 0 }} >
                                <AntDesign name="plus" size={30} color={colors.primary} />
                            </TouchableOpacity>
                        </>
                    }
                    {
                        rightEdit ?
                            <TouchableOpacity onPress={onEditPress} style={{ marginRight: 0 }} >
                                <AntDesign name="edit" size={30} color={colors.primary} />
                            </TouchableOpacity>
                            :
                            rightFilter &&
                            <TouchableOpacity onPress={onFilterPress} style={{ marginRight: 0 }} >
                                <AntDesign name="filter" size={24} color={"#fff"} />
                            </TouchableOpacity>
                    }
                </View>

            </View>
        </View>
    )
}
