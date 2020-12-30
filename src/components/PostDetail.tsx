import { useRecoilValue } from "recoil";
import { getPostDetail } from "../store/selectors/posts";

const PostDetail = () => {
  const currentPost = useRecoilValue(getPostDetail);

  return currentPost ? (
    <>
      <h2>Post Details:</h2>
      <span><strong>{currentPost.title}</strong></span>
      <p>{currentPost.body}</p>
    </>
  ) : null;
};
export default PostDetail;
