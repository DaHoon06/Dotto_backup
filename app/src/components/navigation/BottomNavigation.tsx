import {
  Button,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  View,
} from "react-native";
import { HomeIcon } from "@src/components/common/icons/HomeIcon";
import { CommunityIcon } from "@src/components/common/icons/CommunityIco";
import { HeartIcon } from "@src/components/common/icons/HeartIcon";
import { MessageIcon } from "@src/components/common/icons/MessageIcon";
import { MyPageIcon } from "@src/components/common/icons/MyPageIcon";
import { Color } from "@src/styles/Color";
import {} from "react-native-safe-area-context";

interface Props {
  showLoginModal: (payload: boolean) => void;
}

export const BottomNavigation = (props: Props) => {
  const { showLoginModal } = props;
  const showModal = () => {
    showLoginModal(true);
  };
  return (
    <SafeAreaView style={styles.NavigationContainer}>
      <View style={styles.NavigationItemsContainer}>
        <HomeIcon />
        <CommunityIcon />
        <HeartIcon />
        <MessageIcon />
        <TouchableOpacity onPress={showModal}>
          <MyPageIcon />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  NavigationContainer: {
    flex: 0.25,
    width: "100%",
    height: 60,
    backgroundColor: Color.bgColorDark,
  },
  NavigationItemsContainer: {
    flex: 1,
    width: "100%",
    height: "100%",
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
});
