import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";

import { colors } from "src/constants/colors";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.blackBackground,
    flex: 1,
  },
  spaceFlatList: {
    width: moderateScale(16),
  },
  title: {
    color: colors.whiteF5,
    fontSize: moderateScale(20),
    fontWeight: '700',
    letterSpacing: -0.5,
    marginBottom: moderateScale(24),
    marginLeft: moderateScale(16),
    marginVertical: moderateScale(12),
  },
});
