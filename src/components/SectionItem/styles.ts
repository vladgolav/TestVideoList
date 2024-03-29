import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "src/constants/colors";

export default StyleSheet.create({
  container: {

  },
  titleText: {
    marginTop: moderateScale(40),
    marginBottom: moderateScale(16),
    fontSize: moderateScale(20),
    lineHeight: moderateScale(24),
    color: colors.white,
    letterSpacing: -0.5,
    marginLeft: moderateScale(16),
    fontWeight: '700',
  },
  spaceFlatList: {
    width: moderateScale(16),
  },
});
