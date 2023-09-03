import { Layout } from "@src/components/layout/Layout";
import * as Font from "expo-font";
import { useEffect, useState } from "react";
import SplashScreen from "react-native-splash-screen";

export default function App() {
  const [isLoading, setIsLoading] = useState<boolean>(false);

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
      setIsLoading(true);
      if (SplashScreen) SplashScreen.hide();
    });
  }, []);

  return isLoading && <Layout />;
}
