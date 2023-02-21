import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingVertical: "5%",
    paddingHorizontal: "2.5%",
  },
  spinnerContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  spinner: { width: "30%", height: "50%", resizeMode: "contain" },
  rowView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  searchButton: {
    width: 100,
    height: 50,
    borderRadius: 10,
    marginLeft: "2.5%",
    alignSelf: "flex-end",
    backgroundColor: colors.pink,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 14,
    fontWeight: "bold",
  },
  heading: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 30,
    color: colors.purple,
    letterSpacing: 0.25,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    lineHeight: 35,
    color: colors.headingColor,
    letterSpacing: 0.25,
  },
});
