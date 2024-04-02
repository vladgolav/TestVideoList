import { StyleSheet, Dimensions } from "react-native";
import { colors } from "src/constants/colors";

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  bottomLinearGradient: {
    bottom: 0,
  },
  childrenContainer: {
    flex: 1,
  },
  container: {
    backgroundColor: colors.black,
    borderWidth: 1,
    flex: 1,
  },
  linearGradient: {
    height: height * 0.04,
    position: 'absolute',
    width,
    zIndex: 9,
  },
  shadowContainer: {
    flexDirection: 'column',
    height: height,
    justifyContent: 'space-between',
    width: width,
    zIndex: 0,
  },
});
