import { selector } from "recoil";
import { getPostById, getPosts } from "../../api/posts";
import { currentPostIDState } from "../atoms/posts";

export const getAllPosts = selector({
  key:'GetAllPosts',
  get: async () => {
    const response = await getPosts();
    return response.data;
  }
});

export const getPostDetail = selector({
  key:'GetPostDetail',
  get: async ({get}) => {
    const response = await getPostById(get(currentPostIDState));
    return response.data;
  }
});
