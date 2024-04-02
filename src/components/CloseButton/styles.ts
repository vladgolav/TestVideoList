import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { colors } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    left: moderateScale(16),
    position: 'absolute',
    top: moderateScale(16),
    zIndex: 999,
  },
  icon: {
    height: moderateScale(30),
    tintColor: colors.white,
    width: moderateScale(30),
  },
});
