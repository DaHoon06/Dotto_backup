import {
  Dimensions,
  FlatList,
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text, TouchableNativeFeedback,
  TouchableOpacity, TouchableWithoutFeedback,
  View
} from "react-native";
import {useState} from "react";
import SAMPLE from '@src/assets/images/sample.png';
import {TextFont} from "@src/components/common/TextFonts/TextFont";

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

export const Card = ({title, width}) => {
  return (
    <View style={{
      width: '100%',
      borderRadius: 6,
    }}>
      <View>
        <Image source={SAMPLE} />
      </View>
      <TextFont color={'white'} weight={700} size={18}>
        닷투 게시글 - {title}
      </TextFont>
      <TextFont color={'gray'} size={14}>
        2023. 08. 20
      </TextFont>
      <View style={CardStyles.tags}>
        <TextFont color={'gray'}>홍대</TextFont>
      </View>
    </View>
  )
}

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
                  key={index}
                  style={{
                  width: windowWidth - 200,
                  marginVertical: 4,
                  paddingHorizontal: 16,
                  paddingVertical: 10,
                }}>
                  <Card title={value.title} width={windowWidth - 200} />
                </TouchableOpacity>
              )
            })}
          </View>
        </ScrollView>

      </SafeAreaView>
    </View>
  )
}

const CardStyles = StyleSheet.create({
  tags: {
    backgroundColor: '#ededed',
    width: 40,
    height: 20,
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4
  }
})

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
