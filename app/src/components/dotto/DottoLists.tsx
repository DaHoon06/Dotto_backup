import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { TextFont } from "@src/components/common/TextFonts/TextFont";
import { ThumbnailCard } from "@src/components/dotto/ThumbnailCard";
import SAMPLE from "@src/assets/images/sample.png";
import { Color } from "@src/styles/Color";

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
  {
    title: 6,
  },
  {
    title: 7,
  },
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
  {
    title: 6,
  },
  {
    title: 7,
  },
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
  {
    title: 6,
  },
  {
    title: 7,
  },
];

export const DottoLists = () => {
  const windowWidth = Dimensions.get("window").width;

  const onClickHandlerDottoItem = () => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    alert(`width: ${windowWidth} height: ${windowHeight}`);
  };

  return (
    <View style={styles.DottoContainer}>
      <SafeAreaView style={styles.DottoItemScroll}>
        <ScrollView style={styles.DottoScrollView}>
          <View style={styles.LabelWrapper}>
            <TextFont color={"black"} weight={700} size={24}>
              Desgin
            </TextFont>
            <TextFont color={"gray"}>
              타투이스가 올린 다양한 작품 중 내 취향을 찾아보세요!
            </TextFont>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              flexWrap: "wrap",
              width: "100%",
              justifyContent: "space-between",
              paddingHorizontal: 10,
              marginVertical: 10,
              columnGap: 2,
            }}
          >
            {DATA.map((value, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={onClickHandlerDottoItem}
                  key={index + "-container"}
                  style={{
                    width: "48%",
                    marginVertical: 4,
                    paddingVertical: 10,
                  }}
                >
                  <ThumbnailCard
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
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  DottoContainer: {
    width: "100%",
    height: "100%",
    paddingTop: 12,
    flex: 1,
  },
  LabelWrapper: {
    paddingHorizontal: 14,
  },
  DottoScrollView: {
    paddingVertical: 30,
  },
  DottoItemScroll: {
    width: "100%",
    height: "100%",
    backgroundColor: Color.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});
