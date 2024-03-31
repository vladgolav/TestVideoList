import { StyleSheet, Dimensions, Platform } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "src/constants/colors";

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginRight: moderateScale(12),
    width: width * 0.33,
  },
  poster: {
    height: height * 0.2,
    width: width * 0.33,
    borderRadius: moderateScale(8),
  },
  titleText: {
    marginTop: moderateScale(8),
    fontWeight: '600',
    fontSize: moderateScale(14),
    lineHeight: moderateScale(17),
    color: colors.whiteEB,
    marginRight: moderateScale(20),
  },
  blurView: {
    height: height * 0.2,
    width: width * 0.33,
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    borderRadius: moderateScale(8),
    alignItems: 'center',
    justifyContent: 'center',
  },
  commingSoonText: {
    marginTop: moderateScale(8),
    marginBottom: -moderateScale(4),
    fontSize: moderateScale(11),
    fontWeight: '800',
    lineHeight: moderateScale(14),
    letterSpacing: 0.01,
    color: colors.blue,
  },
  lockIconContainer: {
    width: moderateScale(48),
    height: moderateScale(48),
    borderRadius: Platform.OS === 'ios' ? moderateScale(24) : 48,
    justifyContent: 'center',
    alignItems: 'center',
  },
  lockIcon: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
});
