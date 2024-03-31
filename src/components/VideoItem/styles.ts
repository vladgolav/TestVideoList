import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "src/constants/colors";

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    height: height * 0.22,
    width: width - moderateScale(47),
    paddingHorizontal: moderateScale(16),
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderRadius: moderateScale(12),
    marginRight: moderateScale(12),
  },
  videoTypeContainer: {
    marginTop: moderateScale(8),
    padding: moderateScale(6),
    backgroundColor: colors.blackBackground,
    borderRadius: moderateScale(4),
    alignSelf: 'flex-start',
  },
  videoTypeText: {
    fontSize: moderateScale(11),
    fontWeight: '700',
    color: colors.whiteF5,
  },
  titleContainer: {
    marginBottom: moderateScale(16),
  },
  titleText: {
    fontSize: moderateScale(24),
    fontWeight: '700',
    color: colors.whiteF2,
    lineHeight: moderateScale(28),
  },
  subTitleText: {
    fontSize: moderateScale(13),
    fontWeight: '400',
    color: colors.whiteC4,
    lineHeight: moderateScale(16),
    marginTop: moderateScale(8),
  },
  textShadow: {
    textShadowColor: 'rgba(0, 0, 0, 0.8)', 
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 20,
  },
});