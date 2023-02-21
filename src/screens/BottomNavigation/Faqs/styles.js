import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export default StyleSheet.create({
  main: { flex: 1, backgroundColor: "white" },
  container: {
    padding: "5%",
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.headingColor,
    alignSelf: "center",
  },
  description: {
    fontSize: 14,
    marginTop: 10,
    color: "gray",
    textAlign: "justify",
    letterSpacing: 0.25,
    lineHeight: 25,
  },
});
