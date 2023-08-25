import { StyleSheet, View, Text, Image } from "react-native";
import { Header } from "@src/components/layout/Header";
import { DottoLists } from "@src/components/dotto/DottoLists";
import { Color } from "@src/styles/Color";
import sampleGif from "@src/assets/images/intro.gif";

export const HomeScreen = () => {
  return (
    <View style={styles.HomeContainer}>
      <Header />
      <View style={styles.IntroBanner}>
        <Image
          style={{
            width: "100%",
            height: 200,
            zIndex: 1,
            opacity: 0.3,
            borderRadius: 2,
          }}
          source={sampleGif}
          resizeMode="cover"
        />
      </View>
      <DottoLists />
    </View>
  );
};

const styles = StyleSheet.create({
  HomeContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: Color.bgColorDark,
  },
  IntroBanner: {
    paddingVertical: 10,
  },
});
