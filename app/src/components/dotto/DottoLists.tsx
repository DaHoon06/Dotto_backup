import {
  Dimensions, FlatList,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { TextFont } from "@src/components/common/text-fonts/TextFont";
import { DesignCard } from "@src/components/dotto/card/DesignCard";
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
    title: 11,
  },
  {
    title: 12,
  },
  {
    title: 13,
  },
  {
    title: 14,
  },
  {
    title: 15,
  },
  {
    title: 16,
  },
  {
    title: 17,
  },
  {
    title: 21,
  },
  {
    title: 22,
  },
  {
    title: 23,
  },
  {
    title: 24,
  },
  {
    title: 25,
  },
  {
    title: 26,
  },
  {
    title: 27,
  },
];

const deviceHeight = Dimensions.get("window").height;

export const DottoLists = () => {
  const onClickHandlerDottoItem = () => {
    const windowWidth = Dimensions.get("window").width;
    const windowHeight = Dimensions.get("window").height;

    alert(`width: ${windowWidth} height: ${windowHeight}`);
  };

  const listsHeader = () => {
    return (
      <View style={styles.LabelWrapper}>
        <TextFont color={"black"} weight={700} size={20}>
          Design
        </TextFont>
        <TextFont color={"gray"} size={14}>
          타투이스가 올린 다양한 작품 중 내 취향을 찾아보세요!
        </TextFont>
      </View>
    )
  }

  const renderItems = (item) => {
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={onClickHandlerDottoItem}
        key={item + "-container"}
        style={{
          width: "48%",
          marginVertical: 4,
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
    )
  }

  return (
    <SafeAreaView style={styles.DottoContainer}>
      <FlatList
        ListHeaderComponent={listsHeader}
        data={DATA}
        renderItem={renderItems}
        keyExtractor={(item) => String(item.title)}
        columnWrapperStyle={styles.DottoScrollView}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        overScrollMode="never"
        bounces={false}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  DottoContainer: {
    flex: 1,
    width: "100%",
    height: deviceHeight - 130, // IOS: -220, Android: -130
    backgroundColor: Color.white,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
  },
  LabelWrapper: {
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    backgroundColor: Color.white,
  },
  DottoScrollView: {
    flex: 1,
    height: '100%',
    columnGap: 4
  },
});
