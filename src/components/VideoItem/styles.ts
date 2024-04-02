import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "src/constants/colors";

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    borderRadius: moderateScale(12),
    flexDirection: 'column',
    height: height * 0.22,
    justifyContent: 'space-between',
    marginRight: moderateScale(12),
    paddingHorizontal: moderateScale(16),
    width: width - moderateScale(47),
  },
  subTitleText: {
    color: colors.whiteC4,
    fontSize: moderateScale(13),
    fontWeight: '400',
    lineHeight: moderateScale(16),
    marginTop: moderateScale(8),
  },
  textShadow: {
    textShadowColor: colors.textShadow, 
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 5,
  },
  titleContainer: {
    marginBottom: moderateScale(16),
  },
  titleText: {
    color: colors.whiteF2,
    fontSize: moderateScale(24),
    fontWeight: '700',
    lineHeight: moderateScale(28),
  },
  videoTypeContainer: {
    alignSelf: 'flex-start',
    backgroundColor: colors.blackBackground,
    borderRadius: moderateScale(4),
    marginTop: moderateScale(8),
    padding: moderateScale(6),
  },
  videoTypeText: {
    color: colors.whiteF5,
    fontSize: moderateScale(11),
    fontWeight: '700',
  },
});