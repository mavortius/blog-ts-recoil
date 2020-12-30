import axios from "axios";
import Post from "../../models/Post";

export const getPosts = async () => {
  return axios.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
};

export const getPostById = async (id: number) => {
  return axios.get<Post>(`https://jsonplaceholder.typicode.com/posts/${id}`);
};
