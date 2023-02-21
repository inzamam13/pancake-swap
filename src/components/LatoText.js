import React from "react";
import { Text, } from "react-native";
import { wp } from "../services/helpers";

export default ({
    lines, fontName, fontSize, color, alignSelf, backgroundColor, flex, width, height,
    marginVertical, marginHorizontal, marginTop, marginLeft, marginRight, marginBottom,
    padding, paddingTop, paddingLeft, paddingBottom, paddingRight, paddingHorizontal, paddingVertical,
    opacity, textAlign, textAlignVertical, text, fontWeight, onPress, lineHeight, textDecorationLine,
    style
}) => {

    return (
        <Text numberOfLines={lines}
            onPress={onPress}
            style={[{
                fontSize: fontSize || wp(4),
                color: color || "#000",
                alignSelf,
                backgroundColor,
                flex,
                width, height,
                marginVertical, marginHorizontal,
                marginTop, marginLeft, marginRight, marginBottom,
                padding, paddingTop, paddingLeft, paddingBottom,
                paddingRight,
                paddingHorizontal, paddingVertical,
                opacity,
                textAlign, textAlignVertical,
                textDecorationLine,
                lineHeight
            }, style]}
        >
            {text}
        </Text >
    );
}