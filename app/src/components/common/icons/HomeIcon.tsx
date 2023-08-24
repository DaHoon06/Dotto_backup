import {View} from "react-native";
import Svg, { Path } from 'react-native-svg'

export const HomeIcon = () => {
  return (
    <View>
      <Svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <Path d="M6 10V19C6 19.2652 6.10536 19.5196 6.29289 19.7071C6.48043 19.8946 6.73478 20 7 20H17C17.2652 20 17.5196 19.8946 17.7071 19.7071C17.8946 19.5196 18 19.2652 18 19V10M6 10L12 4L18 10M6 10L4 12M18 10L20 12M10 13H14V17H10V13Z" stroke="white" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </Svg>
    </View>
  )
}
