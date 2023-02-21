import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";

export default StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: colors.headingColor,
    height: "100%",
    padding: "5%",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  rewardContainer: { justifyContent: "center", alignItems: "center" },
  reward: {
    fontSize: 32,
    color: "white",
    fontWeight: "bold",
    letterSpacing: 1,
  },
  rewardTitle: { fontSize: 18, color: "white" },
  bottomContentContainer: {
    marginVertical: "5%",
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
  },
  rowView: {
    width: "100%",
    marginVertical: "2.5%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    textAlign: "left",
  },
  textTitle: {
    color: "white",
    fontSize: 13,
    textAlign: "left",
    fontWeight: "700",
  },
  textValue: {
    color: "white",
    fontSize: 13,
    fontWeight: "700",
  },
});
