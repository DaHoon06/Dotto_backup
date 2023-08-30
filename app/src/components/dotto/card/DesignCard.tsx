import { Image, StyleSheet, View } from "react-native";
import { TextFont } from "@src/components/common/text-fonts/TextFont";
import { Color } from "@src/styles/Color";
import { Card } from "../../ui/card/Card";

interface Tag {
  label: string;
  _id: string;
}

interface ThumbnailInfo {
  thumbnail?: string;
  title: string;
  date: string;
  tags?: Tag[];
}

interface Props {
  thumbnailInfo: ThumbnailInfo;
}
export const DesignCard = (props: Props) => {
  const { thumbnailInfo } = props;
  return (
    <Card imageSource={thumbnailInfo.thumbnail}>
      <TextFont color={"black"} weight={700} size={18}>
        닷투 게시글 - {thumbnailInfo.title}
      </TextFont>
      <TextFont color={"gray"} size={14}>
        {thumbnailInfo.date}
      </TextFont>
      <View style={CardStyles.tagsContainer}>
        {thumbnailInfo.tags &&
          thumbnailInfo.tags.map((tag) => {
            return (
              <View style={CardStyles.tags} key={tag._id}>
                <TextFont color={"gray"}>{tag.label}</TextFont>
              </View>
            );
          })}
      </View>
    </Card>
  );
};

const CardStyles = StyleSheet.create({
  tagsContainer: {
    flexDirection: "row",
  },
  tags: {
    backgroundColor: Color.gray500,
    width: 40,
    height: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    marginRight: 4,
  },
});
