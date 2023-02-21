import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default StyleSheet.create({
  headerContainer: {
    alignItems: "center",
    backgroundColor: colors.headingColor,
    height: 60,
    padding: 15,
    justifyContent: "center",
  },
  headerTitle: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  },
});
