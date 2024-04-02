import { StyleSheet } from "react-native";
import { moderateScale } from "react-native-size-matters";
import { colors } from "src/constants/colors";

export default StyleSheet.create({
  container: {

  },
  flatlist: {
    backgroundColor: colors.blackBackground,
  },
  spaceFlatList: {
    width: moderateScale(16),
  },
});
