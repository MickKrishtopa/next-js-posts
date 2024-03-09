import { Box, Flex } from "@chakra-ui/react";
import { Post } from "../Post/Post";
import { IPost } from "@/shared/types";

type Props = {
  postListData: IPost[];
};

const PostList = ({ postListData }: Props) => {
  return (
    <Flex
      as="ul"
      listStyleType="none"
      flexDirection="column"
      gap="20px"
      padding="20px 0"
    >
      {postListData &&
        postListData.map((post) => <Post key={post.id} postData={post} />)}
    </Flex>
  );
};

export { PostList };
