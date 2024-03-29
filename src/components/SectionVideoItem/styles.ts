import { StyleSheet, Dimensions } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "src/constants/colors";

const { height, width } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    marginRight: moderateScale(12),
    width: width * 0.33,
  },
  poster: {
    height: height * 0.16,
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
});
