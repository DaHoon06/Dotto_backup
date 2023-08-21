import {View} from "react-native";
import Svg, { Path } from 'react-native-svg'

export const HamburgerIcon = () => {
  return (
    <View>
      <Svg width="28" height="28" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M2.5 14.1667H17.5M2.5 10H17.5M2.5 5.83337H17.5" stroke="white" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      </Svg>
    </View>
  )
}
