import { useRouter } from "next/navigation";
import { Box, Flex } from "@chakra-ui/react";

import { IPost } from "@/shared/types";

type Props = {
  postData: IPost;
};

const Post = ({ postData }: Props) => {
  const { id, title, body } = postData;

  const router = useRouter();

  return (
    <Flex
      flexDir="column"
      border="1px solid black"
      borderRadius="10px"
      padding="10px"
      onClick={() => router.push(`/post-list/${id}`)}
      cursor="pointer"
    >
      <Box as="h2" fontSize="24px">
        {title}
      </Box>
      <Box as="p">{body}</Box>
    </Flex>
  );
};

export { Post };
