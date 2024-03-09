import { IPost } from "./types";

export const fetchPostListData = async (): Promise<IPost[]> => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data");
  }
};

export const fetchPostById = async (id: string | string[]): Promise<IPost> => {
  try {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    return res.json();
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch data");
  }
};
