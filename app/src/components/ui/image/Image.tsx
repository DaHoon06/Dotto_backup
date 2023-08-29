import { Image, ImageSourcePropType, View } from "react-native";

export interface ImageProps {
  imageSource: any;
}

export const ImageUi = (props: ImageProps) => {
  const { imageSource } = props;

  return (
    <View style={{ width: "100%" }}>
      <Image style={{ width: "100%", borderRadius: 4 }} source={imageSource} />
    </View>
  );
};
