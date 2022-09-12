import { useEffect, useState } from "react";
import axios from "axios";
import ForumPost from "./ForumPost";
import styles from "./ForumList.module.scss";

function ForumList() {
  const [postList, setPostList] = useState([]);
  useEffect(() => {
    axios
      .get(" https://jsonplaceholder.typicode.com/posts")
      .then((response) => setPostList(response.data)).catch(error => console.log(error.message));
  }, []);
  return (
    <div className={styles["forum-posts-content"]}>
      <div className={styles["forum-header-content"]}>
        <span>Current posts</span>
      </div>
      <div className={styles["forum-post-list"]}>
        {postList.map((post) => (
          <ForumPost key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}

export default ForumList;
