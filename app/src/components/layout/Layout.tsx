import {StatusBar, View} from "react-native";
import {Router} from "@src/router";
import {getStatusBarHeight} from 'react-native-status-bar-height';

export const Layout = () => {
  const height = getStatusBarHeight()+20;

  return (
    <View style={{backgroundColor: '#2D2D2D', width: '100%', height: '100%'}}>
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
    </View>
  )
}
