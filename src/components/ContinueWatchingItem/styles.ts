import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(16),
    paddingLeft: moderateScale(6),
    paddingVertical: moderateScale(6),
    paddingRight: moderateScale(16),
    backgroundColor: colors.darkBlue,
    flexDirection: 'row',
    borderRadius: moderateScale(12),
    alignItems: 'center',
  },
  poster: {
    height: moderateScale(56),
    width: moderateScale(44),
    borderRadius: moderateScale(12),
    marginRight: moderateScale(12),
  },
  centerContainer: {
    flex: 0.95,
  },
  titleText: {
    color: colors.whiteEB,
    fontSize: moderateScale(16),
    fontWeight: '700',
    lineHeight: moderateScale(20),
    textShadowColor: 'rgba(0, 0, 0, 0.8)', 
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  subTitleText: {
    marginTop: moderateScale(4),
    fontSize: moderateScale(14),
    lineHeight: moderateScale(18),
    color: colors.whiteE1,
    fontWeight: '400',
    textShadowColor: 'rgba(0, 0, 0, 0.8)', 
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  rightContainer: {
    alignItems: 'flex-end',
    flex: 0.15,
  },
  arrowIcon: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
});
