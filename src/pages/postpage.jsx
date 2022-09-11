import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import Post from "../components/Post";
import styles from "./postpage.module.scss";
import Button from "../components/page-components/UI/Button";

export default function PostPage() {
  const { id } = useParams();
  const [post, setPost] = useState();
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => setPost(response.data));
    axios
      .get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
      .then((response) => {
        setCommentsList(response.data);
      });
  }, [id]);

  return (
    <div className={styles["post-content"]}>
      {post && (
        <div>
          <h2>{post.title}</h2>
          <Post {...post} />
        </div>
      )}
      <div className={styles["postsection"]}>
        <h2>Comments</h2>
        {commentsList &&
          commentsList.map((comment) => (
            <Post key={comment.id} {...comment} />
          ))}
      </div>
      <div className={styles["postsection"]}>
        <Link to="/">
          <Button text="< Back to startpage" />
        </Link>
      </div>
    </div>
  );
}
