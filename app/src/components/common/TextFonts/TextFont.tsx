import {Text} from "react-native";
import {ReactNode} from "react";
import {Color} from "@src/styles/Color";

type FontColor = 'white' | 'black' | 'black100' | 'gray' | 'gray100' | 'gray200' | 'gray300'| 'gray400' | 'gray500' | 'darkGray100' | 'darkGray200'

interface Props {
  color: FontColor;
  children: ReactNode;
  weight?: number;
  size?: number;
}

export const TextFont = (props: Props) => {
  const {children, color = 'black', weight, size = 16} = props;
  return (
    <Text style={{
      color: Color[color],
      fontWeight: weight,
      fontSize: size
    }}>
      {children}
    </Text>
  )
}
