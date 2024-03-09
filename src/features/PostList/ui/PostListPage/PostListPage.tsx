"use client";
import { useState, useEffect } from "react";
import { Spinner } from "@chakra-ui/react";

import { IPost } from "@/shared/types";
import { fetchPostListData } from "@/shared/api";

import { PostList } from "../PostList/PostList";

import { usePagination } from "../../model/hooks/usePagination";

const PostListPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [postListData, setPostListData] = useState<IPost[] | null>(null);

  const { PaginationControlPanel, itemToShow } =
    usePagination<IPost>(postListData);

  useEffect(() => {
    fetchPostListData()
      .then((res) => setPostListData(res))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <Spinner size="xl" marginTop="50px" />;
  }

  return itemToShow ? (
    <>
      <PostList postListData={itemToShow} />
      <PaginationControlPanel />
    </>
  ) : (
    <p>Nothing not found</p>
  );
};

export { PostListPage };
