import { Children, ReactElement, ReactNode } from "react";
import { StyleSheet, View } from "react-native";
import { ImageUi } from "../image/Image";

interface Props {
  size?: number;
  children: ReactNode;
  imageSource: any;
}

export const Card = (props: Props): ReactElement => {
  const { size, children, imageSource } = props;

  return (
    <View style={[{ width: size }, cardStyles.layout]}>
      <ImageUi imageSource={imageSource} />
      <View style={cardStyles.body}>{children}</View>
    </View>
  );
};

const cardStyles = StyleSheet.create({
  layout: {
    flex: 1,
    minWidth: 100,
  },
  body: {
    paddingTop: 4,
  },
});
