import {StyleSheet, View} from "react-native";
import {Header} from "@src/components/layout/Header";
import {DottoLists} from "@src/components/dotto/DottoLists";
import {Color} from "@src/styles/Color";

export const HomeScreen = () => {
  return (
    <View style={styles.HomeContainer}>
      <Header />
      <DottoLists />
    </View>
  )
}

const styles = StyleSheet.create({
  HomeContainer: {
    width: '100%',
    height: '100%',
    backgroundColor: Color.bgColorDark,
  },
});
