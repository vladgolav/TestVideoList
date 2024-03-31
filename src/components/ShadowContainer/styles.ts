import { StyleSheet, Dimensions, Platform } from "react-native";
import { colors } from "src/constants/colors";

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 1,
    backgroundColor: colors.black,
  },
  childrenContainer: {
    flex: 1,
  },
  shadowContainer: {
    height: height,
    width: width,
    zIndex: 0,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  linearGradient: {
    height: height * 0.04,
    width,
    position: 'absolute',
    zIndex: 9,
  },
  bottomLinearGradient: {
    bottom: 0,
  },
});
