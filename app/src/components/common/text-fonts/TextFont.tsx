import { Text } from "react-native";
import { ReactNode } from "react";
import { Color } from "@src/styles/Color";

type FontColor =
  | "white"
  | "black"
  | "black100"
  | "gray"
  | "gray100"
  | "gray200"
  | "gray300"
  | "gray400"
  | "gray500"
  | "darkGray100"
  | "darkGray200";

type FontFamily = "thin" | "light" | "regular" | "medium" | "semiBold";

enum font {
  thin = "Pretendard-Thin",
  light = "Pretendard-Light",
  regular = "Pretendard-Regular",
  medium = "Pretendard-Medium",
  semiBold = "Pretendard-SemiBold",
}

interface Props {
  color: FontColor;
  children: ReactNode;
  weight?: number;
  size?: number;
  fontFamily?: FontFamily;
}

export const TextFont = (props: Props) => {
  const {
    children,
    color = "black",
    weight,
    fontFamily = "regular",
    size = 16,
  } = props;

  return (
    <Text
      style={{
        color: Color[color],
        fontWeight: weight,
        fontSize: size,
        fontFamily: font[fontFamily],
      }}
    >
      {children}
    </Text>
  );
};
