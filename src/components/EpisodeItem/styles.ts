import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "src/constants/colors";

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.black,
    height: 837,
    width,
    zIndex: 99,
  },
  nameText: {
    color: colors.whiteF5,
    fontSize: moderateScale(20),
    fontWeight: '700',
    letterSpacing: -0.05,
    lineHeight: moderateScale(24),
    textAlign: 'center',
    width,
  },
  titleContainer: {
    position: 'absolute',
    top: moderateScale(20),
    zIndex: 999,
  },
  video: {
    width: '100%',
  },
});
