import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: { flex: 1, backgroundColor: "white" },
  topHeading: {
    color: `#58667e`,
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 18,
    paddingVertical: "2.5%",
  },
  price: { fontSize: 32, fontWeight: "bold", color: "black", lineHeight: 40 },
  rowView: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  percentageContainer: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    padding: "2.5%",
    borderRadius: 5,
  },
  percentage: {
    fontSize: 12,
    color: "white",
    paddingHorizontal: ".5%",
    fontWeight: "bold",
  },
});
