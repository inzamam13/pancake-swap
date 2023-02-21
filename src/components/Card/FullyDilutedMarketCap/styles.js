import { StyleSheet } from "react-native";
export default StyleSheet.create({
  container: {
    paddingVertical: "5%",
    marginHorizontal: "5%",
    borderBottomWidth: 0.5,
    borderColor: "#58667e",
    marginBottom: "2.5%",
  },
  headerContainer: {
    // marginBottom: 8,
  },
  headerText: {
    fontSize: 16,
    fontWeight: "700",

    color: "#58667e90",
  },
  headerValue: {
    fontSize: 14,
    color: "black",
    fontWeight: "700",
    letterSpacing: 0.25,
    paddingVertical: "2.5%",
  },
  changeContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  changePercent: {
    fontSize: 14,
    color: "red",
    marginRight: 8,
  },

  ratioContainer: {},
  ratioRow: {
    justifyContent: "space-between",
    marginVertical: 4,
  },
  ratioLabel: {
    fontSize: 14,
    fontWeight: "700",
    color: "#58667e90",
  },
  ratioValue: {
    fontSize: 14,
    color: "black",
    fontWeight: "700",
    paddingTop: "2.5%",
  },
});
