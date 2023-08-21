import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Logo} from "@src/components/common/icons/Logo";
import {HamburgerIcon} from "@src/components/common/icons/Hamburger";

export const Header = () => {
  const onClickHandlerLogo = () => {
    alert('홈으로 이동')
  }
  const onClickHandlerMenuButton = () => {
    alert('메뉴 열자')
  }
  return (
    <View style={styles.HeaderContainer}>
      <View style={styles.HeaderItemsContainer}>
        <TouchableOpacity activeOpacity={0.9} onPress={onClickHandlerLogo}>
          <Logo />
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} onPress={onClickHandlerMenuButton}>
          <HamburgerIcon />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  HeaderContainer: {
    width: '100%',
    paddingHorizontal: 6,
    paddingVertical: 8
  },
  HeaderItemsContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});