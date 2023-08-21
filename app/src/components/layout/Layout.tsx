import {StatusBar, View} from "react-native";
import {Router} from "@src/router";
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Layout = () => {
  const height = getStatusBarHeight();

  return (
    <>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'#2D2D2D'}
        translucent={true}
      />
      <View style={{
        flex: 1,
        width: '100%',
        height: '100%',
        paddingTop: height,
      }}>
        <Router/>
      </View>
    </>
  )
}