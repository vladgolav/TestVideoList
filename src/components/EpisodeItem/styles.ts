import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "src/constants/colors";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height,
    width,
  },
  titleContainer: {
    zIndex: 99,
    top: moderateScale(12),
  },
  nameText: {
    position: 'absolute',
    textAlign: 'center',
    width,
    color: colors.whiteF5,
    fontSize: moderateScale(20),
    lineHeight: moderateScale(24),
    letterSpacing: -0.05,
    fontWeight: '700',
  },
});
