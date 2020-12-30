import { Suspense } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { getAllPosts } from "../store/selectors/posts";
import { currentPostIDState } from "../store/atoms/posts";
import PostDetail from "../components/PostDetail";

const PostsPage = () => {
  const posts = useRecoilValue(getAllPosts);
  const [currentPostID, setCurrentPostID] = useRecoilState(currentPostIDState);

  return (
    <div>
      <h2>Post List</h2>
      {posts.map((post) => (
        <div key={post.id}>
          <button onClick={() => setCurrentPostID(post.id)}>
            {post.id === currentPostID && '- '}
            {post.title}
          </button>
        </div>
      ))}
      {currentPostID && (
        <Suspense fallback={<span>Loading post details...</span>}>
          <PostDetail />
        </Suspense>
      )}
    </div>
  )
}
export default PostsPage;
