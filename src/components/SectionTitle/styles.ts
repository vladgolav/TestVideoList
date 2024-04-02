import { StyleSheet } from "react-native"
import { moderateScale } from "react-native-size-matters";

import { colors } from "src/constants/colors";

export default StyleSheet.create({
  titleText: {
    color: colors.white,
    fontSize: moderateScale(20),
    fontWeight: '700',
    letterSpacing: -0.5,
    lineHeight: moderateScale(24),
    marginBottom: moderateScale(16),
    marginLeft: moderateScale(16),
    marginTop: moderateScale(40),
  },
});
