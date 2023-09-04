import {Dimensions, Platform, SafeAreaView, StatusBar, View} from "react-native";
import { Router } from "@src/router";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Color } from "@src/styles/Color";
import { BottomNavigation } from "@src/components/navigation/BottomNavigation";
import { SignInModal } from "../common/modal/SignInModal";
import { useState } from "react";


const deviceHeight = Dimensions.get("window").height;

export const Layout = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const showLoginModal = (payload: boolean) => {
    setShowModal(payload);
  };

  return (
    <View
      style={{
        paddingTop: Platform.OS === 'ios' ? 0 : getStatusBarHeight(),
        backgroundColor: Color.bgColorDark,
        width: "100%",
        height: deviceHeight, // IOS: -220, Android: -120
      }}
    >
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={Color.bgColorDark}
        translucent={true}
      />
      <SafeAreaView
        style={{
          flex: 1,
          width: "100%",
          height: '100%'
        }}
      >
        <Router />
      </SafeAreaView>
      <BottomNavigation showLoginModal={showLoginModal} />
      <SignInModal showModal={showModal} onRequestClose={showLoginModal} />
    </View>
  );
};
