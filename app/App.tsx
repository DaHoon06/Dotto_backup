import { Layout } from "@src/components/layout/Layout";
import * as Font from "expo-font";
import { useEffect } from "react";
import SplashScreen from "react-native-splash-screen";

export default function App() {
  const preloadAssets = () => {
    return Font.loadAsync({
      "Pretendard-Light": require("./assets/fonts/Pretendard-Light.ttf"),
      "Pretendard-Thin": require("./assets/fonts/Pretendard-Thin.ttf"),
      "Pretendard-SemiBold": require("./assets/fonts/Pretendard-SemiBold.ttf"),
      "Pretendard-Regular": require("./assets/fonts/Pretendard-Regular.ttf"),
      "Pretendard-Medium": require("./assets/fonts/Pretendard-Medium.ttf"),
    });
  };

  const preload = async () => {
    return await preloadAssets();
  };

  useEffect(() => {
    preload().then((context) => {
      if (SplashScreen) SplashScreen.hide();
    });
  }, []);

  return <Layout />;
}
