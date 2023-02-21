import { StyleSheet } from "react-native";
import { colors } from "../../../utils/colors";
import { _height_screen, _width_screen } from "../../../utils/dimensions";

export default StyleSheet.create({
  container: {
    flex: 1,
    height: _height_screen,
    backgroundColor: "white",
  },
  topContainer: {
    flex: 0.35,
    justifyContent: "center",
    alignItems: "center",
    padding: "5%",
  },
  bottomContainer: {
    padding: "5%",
    justifyContent: "space-evenly",
  },
  calculateButton: {
    width: "100%",
    height: 50,
    borderRadius: 10,
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
  title: {
    fontSize: 18,
    fontWeight: "bold",
    color: colors.headingColor,
    alignSelf: "center",
  },
});
