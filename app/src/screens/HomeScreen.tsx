import {StyleSheet, View} from "react-native";
import {Header} from "@src/components/layout/Header";
import {DottoLists} from "@src/components/dotto/DottoLists";

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
    backgroundColor: "#2d2d2d",
  },
  Text: {
    color: '#fff'
  }
});