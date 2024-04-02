import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "src/constants/colors";

export default StyleSheet.create({
  arrowIcon: {
    height: moderateScale(24),
    width: moderateScale(24),
  },
  centerContainer: {
    flex: 0.95,
  },
  container: {
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
    borderRadius: moderateScale(12),
    flexDirection: 'row',
    marginHorizontal: moderateScale(16),
    paddingLeft: moderateScale(6),
    paddingRight: moderateScale(16),
    paddingVertical: moderateScale(6),
  },
  poster: {
    borderRadius: moderateScale(12),
    height: moderateScale(56),
    marginRight: moderateScale(12),
    width: moderateScale(44),
  },
  rightContainer: {
    alignItems: 'flex-end',
    flex: 0.15,
  },
  subTitleText: {
    color: colors.whiteE1,
    fontSize: moderateScale(14),
    fontWeight: '400',
    lineHeight: moderateScale(18),
    marginTop: moderateScale(4),
    textShadowColor: colors.textShadow, 
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  titleText: {
    color: colors.whiteEB,
    fontSize: moderateScale(16),
    fontWeight: '700',
    lineHeight: moderateScale(20),
    textShadowColor: colors.textShadow, 
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
});
