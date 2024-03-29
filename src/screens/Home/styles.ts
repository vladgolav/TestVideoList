import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { colors } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.blackBackground,
  },
  title: {
    color: colors.whiteF5,
    marginVertical: moderateScale(12),
    marginLeft: moderateScale(16),
    fontSize: moderateScale(20),
    letterSpacing: -0.5,
    fontWeight: '700',
    marginBottom: moderateScale(24),
  },
  spaceFlatList: {
    width: moderateScale(16),
  },
});
