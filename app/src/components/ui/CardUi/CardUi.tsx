import {View} from "react-native";
import {ReactNode} from "react";
import {CardUiStyles} from "@src/components/ui/CardUi/CardUi.styles";

interface Props {
  children: ReactNode
}

export const CardUi = (props) => {
  return (
    <View style={CardUiStyles.Container}>

    </View>
)}