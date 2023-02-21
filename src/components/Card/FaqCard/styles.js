import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: "#f2f2f2",
    padding: "6%",
    marginVertical: "2.5%",
    borderRadius: 10,
  },
  questionContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  question: {
    fontWeight: "bold",
    fontSize: 14,
    color: colors.headingColor,
    maxWidth: "90%",
  },
  answer: {
    fontSize: 14,
    marginVertical: "2.5%",
    textAlign: "justify",
    color: "gray",
    letterSpacing: 0.25,
    lineHeight: 20,
    paddingRight: "2%",
  },
});
