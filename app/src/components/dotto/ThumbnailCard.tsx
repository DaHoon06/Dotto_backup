import { Image, StyleSheet, View } from "react-native";
import { TextFont } from "@src/components/common/text-fonts/TextFont";
import { Color } from "@src/styles/Color";

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
export const ThumbnailCard = (props: Props) => {
  const { thumbnailInfo } = props;
  return (
    <View>
      <View style={{ width: "100%" }}>
        <Image
          style={{ width: "100%", borderRadius: 4 }}
          source={thumbnailInfo.thumbnail}
        />
      </View>
      <TextFont color={"white"} weight={700} size={18}>
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
    </View>
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
