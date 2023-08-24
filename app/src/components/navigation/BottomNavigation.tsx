import {StyleSheet, View} from "react-native";
import {HomeIcon} from "@src/components/common/icons/HomeIcon";
import {CommunityIcon} from "@src/components/common/icons/CommunityIco";
import {HeartIcon} from "@src/components/common/icons/HeartIcon";
import {MessageIcon} from "@src/components/common/icons/MessageIcon";
import {MyPageIcon} from "@src/components/common/icons/MyPageIcon";

export const BottomNavigation = () => {
  return (
    <View style={styles.NavigationContainer}>
      <View>
        <HomeIcon />
        <CommunityIcon />
        <HeartIcon />
        <MessageIcon />
        <MyPageIcon />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  NavigationContainer: {
    flex: 1,
    width: '100%',
    height: 52
  }
})
