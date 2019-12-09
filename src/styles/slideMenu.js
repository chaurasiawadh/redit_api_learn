import colors from "../component/colors/color";
import {StyleSheet} from "react-native";
exports.styles = StyleSheet.create({
    headView:{backgroundColor: colors.primary},
    card: {
      backgroundColor: colors.primary,
      padding: 50,
      borderRadius: 2,
    },
    subCard: {
      backgroundColor: colors.white,
      padding: 10,
      borderBottomWidth: 0.5,
      flexDirection: 'row',
    },
    txt: {
      marginLeft: 10,
    },
    touchable: {
      flexDirection: 'row',
      paddingTop: 40,
      justifyContent: 'space-between',
      paddingBottom: 20,
      paddingLeft: 20,
      paddingRight: 20,
    },
    headerTitle: {fontSize: 16, color: colors.white},
  });