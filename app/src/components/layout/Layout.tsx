import { StatusBar, View } from "react-native";
import { Router } from "@src/router";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Color } from "@src/styles/Color";
import { BottomNavigation } from "@src/components/navigation/BottomNavigation";

export const Layout = () => {
  const height = getStatusBarHeight() + 20;

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
      <View
        style={{
          flex: 3,
          width: "100%",
          height: "100%",
          paddingTop: height,
        }}
      >
        <Router />
      </View>
      <BottomNavigation />
    </View>
  );
};
