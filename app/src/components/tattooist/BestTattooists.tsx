import { SafeAreaView } from "react-native-safe-area-context";
import { TextFont } from "@src/components/common/text-fonts/TextFont";
import { DesignCard } from "@src/components/dotto/card/DesignCard";
import SAMPLE from "@src/assets/images/sample.png";
import {ScrollView, StyleSheet, TouchableOpacity} from "react-native";

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


export const BestTattooists = () => {
  return (
    <>
      {/*<View style={styles.IntroBanner}>*/}
      {/*  <Image*/}
      {/*    style={{*/}
      {/*      width: "100%",*/}
      {/*      height: 200,*/}
      {/*      zIndex: 1,*/}
      {/*      opacity: 0.3,*/}
      {/*      borderRadius: 2,*/}
      {/*    }}*/}
      {/*    source={sampleGif}*/}
      {/*    resizeMode="cover"*/}
      {/*  />*/}
      {/*</View>*/}
      <SafeAreaView style={styles.TattooistContainer}>
        {/*<View>*/}
        {/*  <TextFont color={"white"} weight={700} size={24}>*/}
        {/*    Best Tattoist*/}
        {/*  </TextFont>*/}
        {/*  <TextFont color={"gray"} weight={700} size={16}>*/}
        {/*    인기쟁이*/}
        {/*  </TextFont>*/}
        {/*</View>*/}
        <ScrollView
          bounces={false}
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
          horizontal={true}
        >
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
    </>
  )
}

const styles = StyleSheet.create({
  TattooistContainer: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginVertical: 10,
  },
});