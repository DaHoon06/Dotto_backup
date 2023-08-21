import {Text} from "react-native";
import {ReactNode} from "react";

type FontColor = 'white' | 'black' | 'gray'

enum Color {
  white = '#fff',
  black = '#000',
  gray = '#C5C5C5'
}

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
