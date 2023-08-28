import { SafeAreaView, StatusBar, View } from "react-native";
import { Router } from "@src/router";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Color } from "@src/styles/Color";
import { BottomNavigation } from "@src/components/navigation/BottomNavigation";
import { SignInModal } from "../common/modal/SignInModal";
import { useState } from "react";

export const Layout = () => {
  const [showModal, setShowModal] = useState<boolean>(false);
  const height = getStatusBarHeight() + 20;

  const showLoginModal = (payload: boolean) => {
    setShowModal(payload);
  };

  return (
    <View
      style={{
        backgroundColor: Color.bgColorDark,
        width: "100%",
        height: "100%",
      }}
    >
      <StatusBar
        barStyle={"light-content"}
        backgroundColor={Color.bgColorDark}
        translucent={true}
      />
      <SafeAreaView
        style={{
          flex: 3,
          width: "100%",
          height: "100%",
        }}
      >
        <Router />
      </SafeAreaView>
      <BottomNavigation showLoginModal={showLoginModal} />
      <SignInModal showModal={showModal} />
    </View>
  );
};
