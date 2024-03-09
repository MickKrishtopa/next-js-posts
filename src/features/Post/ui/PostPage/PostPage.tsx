"use client";
import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { Flex, Box, Spinner, Button } from "@chakra-ui/react";
import { ArrowBackIcon } from "@chakra-ui/icons";

import { IPost } from "@/shared/types";
import { fetchPostById } from "@/shared/api";

const PostPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [postData, setPostData] = useState<IPost | null>(null);
  const { id } = useParams();
  const router = useRouter();
  useEffect(() => {
    if (!id) return;
    fetchPostById(id)
      .then((res) => setPostData(res))
      .finally(() => setIsLoading(false));
  }, [id]);

  if (isLoading) {
    return <Spinner size="xl" marginTop="50px" />;
  }

  return (
    <>
      {postData ? (
        <Flex flexDir="column">
          <Box as="h2" fontSize="40px" textAlign="center" margin="20px">
            {postData.title}
          </Box>
          <Box as="p" margin="20px 0 ">
            {postData.body}
          </Box>
          <Box as="span">User ID: {postData.userId}</Box>
          <Box as="span">Post ID: {postData.id}</Box>
        </Flex>
      ) : (
        <p>Nothing not found</p>
      )}
      <Button margin="20px auto" onClick={() => router.push("/post-list")}>
        <ArrowBackIcon />
        Go back
      </Button>
    </>
  );
};

export { PostPage };
