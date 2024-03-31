import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { colors } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    position: 'absolute',
    zIndex: 999,
    top: moderateScale(12),
    left: moderateScale(16),
  },
  icon: {
    width: moderateScale(30),
    height: moderateScale(30),
    tintColor: colors.white,
  },
});
