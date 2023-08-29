import {
  StyleSheet,
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Header } from "@src/components/layout/Header";
import { DottoLists } from "@src/components/dotto/DottoLists";
import { Color } from "@src/styles/Color";
import sampleGif from "@src/assets/images/intro.gif";
import { SafeAreaView } from "react-native-safe-area-context";
import { TextFont } from "@src/components/common/text-fonts/TextFont";
import { DesignCard } from "@src/components/dotto/DesignCard";
import SAMPLE from "@src/assets/images/sample.png";

const DATA = [
  {
    title: 1,
  },
  {
    title: 2,
  },
  {
    title: 3,
  },
  {
    title: 4,
  },
  {
    title: 5,
  },
];

export const HomeScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0, 3]}
      style={styles.HomeContainer}
    >
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
      <SafeAreaView style={tattoistStyels.TattooistContainer}>
        <View>
          <TextFont color={"white"} weight={700} size={24}>
            Best Tattoist
          </TextFont>
          <TextFont color={"gray"} weight={700} size={16}>
            인기쟁이
          </TextFont>
        </View>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {DATA.map((value, index) => {
            return (
              <TouchableOpacity
                activeOpacity={1}
                key={index + "-container"}
                style={{
                  marginVertical: 4,
                  paddingVertical: 10,
                  marginRight: 16,
                }}
              >
                <DesignCard
                  thumbnailInfo={{
                    title: "제목",
                    thumbnail: SAMPLE,
                    date: "2023.08.22",
                    tags: [
                      { label: "홍대", _id: "tags1" },
                      { label: "홍대", _id: "tags2" },
                    ],
                  }}
                />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </SafeAreaView>
      <DottoLists />
    </ScrollView>
  );
};
const tattoistStyels = StyleSheet.create({
  TattooistContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
  },
  test: {
    flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "beige",
  },
});

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
