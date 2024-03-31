import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "src/constants/colors";

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: 837,
    width,
    zIndex: 99,
  },
  titleContainer: {
    position: 'absolute',
    zIndex: 999,
    top: moderateScale(20),
  },
  nameText: {
    textAlign: 'center',
    width,
    color: colors.whiteF5,
    fontSize: moderateScale(20),
    lineHeight: moderateScale(24),
    letterSpacing: -0.05,
    fontWeight: '700',
  },
});
