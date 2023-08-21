import {Dimensions, FlatList, ScrollView, StyleSheet, Text, TouchableOpacity, View} from "react-native";
import {useState} from "react";

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
      width,
      padding: 10,
      height: 100,
      marginVertical: 6,
      backgroundColor: '#fff',
      marginHorizontal: 10,
    }}>
      <Text>
        {title}
      </Text>
    </View>
  )
}

export const DottoLists = () => {
  const [containerWidth, setContainerWidth] = useState(0);
  const margins = 20 * 2;
  const numColumns = 2;

  const onClickHandlerDottoItem = () => {
    const windowWidth = Dimensions.get('window').width;
    const windowHeight = Dimensions.get('window').height;

    alert(`width: ${windowWidth} height: ${windowHeight}`)
  }

  return (
    <View style={styles.DottoContainer}>
      <View style={styles.LabelWrapper}>
        <Text style={styles.label}>
          닷투
        </Text>
        <Text style={styles.label}>
          타투이스가 올린 다양한 작품 중 내 취향을 찾아보세요!
        </Text>
      </View>
      <ScrollView style={styles.DottoItemScroll}>
        <FlatList
          onLayout={e => setContainerWidth(e.nativeEvent.layout.width)}
          numColumns={numColumns}
          data={DATA}
          renderItem={({item}) => {
            return (
              <TouchableOpacity onPress={onClickHandlerDottoItem}>
                <Card title={item.title} width={(containerWidth - margins) / numColumns} />
              </TouchableOpacity>
            )
        }}
          keyExtractor={(item, index) => index} />
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  DottoContainer: {
    width: '100%',
    paddingHorizontal: 6,
    paddingVertical: 8
  },
  LabelWrapper: {
    padding: 10
  },
  label: {
    color: '#fff'
  },
  DottoItemScroll: {
    width: '100%',
  },
  testContainer: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  }
});