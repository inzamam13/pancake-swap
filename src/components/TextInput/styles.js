import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export default StyleSheet.create({
  container: {
    height: 45,
    width: "100%",
    marginBottom: "10%",
  },
  label: { color: colors.headingColor, fontWeight: "bold", marginBottom: 5 },
  input: {
    height: "100%",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    width: "100%",
    fontSize: 14,
  },
});
