import { StyleSheet, Dimensions, Platform } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "src/constants/colors";

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  blurView: {
    alignItems: 'center',
    borderRadius: moderateScale(8),
    bottom: 0,
    height: height * 0.2,
    justifyContent: 'center',
    left: 0,
    position: "absolute",
    right: 0,
    top: 0,
    width: width * 0.33,
  },
  commingSoonText: {
    color: colors.blue,
    fontSize: moderateScale(11),
    fontWeight: '800',
    letterSpacing: 0.01,
    lineHeight: moderateScale(14),
    marginBottom: -moderateScale(4),
    marginTop: moderateScale(8),
  },
  container: {
    marginRight: moderateScale(12),
    width: width * 0.33,
  },
  lockIcon: {
    height: moderateScale(24),
    width: moderateScale(24),
  },
  lockIconContainer: {
    alignItems: 'center',
    borderRadius: Platform.OS === 'ios' ? moderateScale(24) : 48,
    height: moderateScale(48),
    justifyContent: 'center',
    width: moderateScale(48),
  },
  poster: {
    borderRadius: moderateScale(8),
    height: height * 0.2,
    width: width * 0.33,
  },
  titleText: {
    color: colors.whiteEB,
    fontSize: moderateScale(14),
    fontWeight: '600',
    lineHeight: moderateScale(17),
    marginRight: moderateScale(20),
    marginTop: moderateScale(8),
  },
});
