import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View
} from "react-native";
import {TextFont} from "@src/components/common/TextFonts/TextFont";
import {ThumbnailCard} from "@src/components/dotto/ThumbnailCard";
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
  const windowWidth = Dimensions.get('window').width;

  const onClickHandlerDottoItem = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    alert(`width: ${windowWidth} height: ${windowHeight}`)
  }

  return (
    <View style={styles.DottoContainer}>
      <SafeAreaView style={styles.DottoItemScroll}>
        <ScrollView>
          <View style={styles.LabelWrapper}>
            <TextFont color={'white'} weight={700} size={24}>
              닷투
            </TextFont>
            <TextFont color={'gray'}>
              타투이스가 올린 다양한 작품 중 내 취향을 찾아보세요!
            </TextFont>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              flexWrap: "wrap",
              width: '100%'
            }}
          >
            {DATA.map((value, index) => {
              return (
                <TouchableOpacity
                  activeOpacity={1}
                  onPress={onClickHandlerDottoItem}
                  key={index+"-container"}
                  style={{
                  width: windowWidth - 200,
                  marginVertical: 4,
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                }}>
                  <ThumbnailCard
                    thumbnailInfo={
                      {
                        title: value.title,
                        thumbnail: SAMPLE,
                        date: '2023.08.22',
                        tags:[{label: '홍대', _id: 'tags1'}, {label: '홍대', _id: 'tags2'}]
                      }
                    }/>
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>

      </SafeAreaView>
    </View>
  )
}

const styles = StyleSheet.create({
  DottoContainer: {
    width: '100%',
    height: '100%',
    paddingVertical: 12,
    flex: 1
  },
  LabelWrapper: {
    paddingHorizontal: 14
  },
  DottoItemScroll: {
    width: '100%',
    height: '100%',
    paddingBottom: 100
  },
});
