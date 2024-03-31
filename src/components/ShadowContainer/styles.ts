import { StyleSheet, Dimensions } from "react-native";
import { colors } from "src/constants/colors";

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  childrenContainer: {
    flex: 1,
  },
  shadowContainer: {
    height: height,
    width: width,
    zIndex: 9,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  linearGradient: {
    height: height * 0.1,
    width,
    position: 'absolute',
    zIndex: 99,
  },
  bottomLinearGradient: {
    bottom: 0,
  },
});
