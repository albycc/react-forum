import { Fragment, useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
import Post from "./Post";
import styles from "./postpage.module.scss";
import Button from "../../components/UI/Button";

export default function PostPage() {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [post, setPost] = useState();
  const [originalPoster, setOriginalPoster] = useState()
  const [commentsList, setCommentsList] = useState([]);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => {
        if (response.status === 200) {
          setPost(response.data);
          setTitle(response.data.title)
          axios
            .get(`https://jsonplaceholder.typicode.com/comments/?postId=${id}`)
            .then((response) => {
              setCommentsList(response.data);
            });
          axios.get(`https://jsonplaceholder.typicode.com/users/${response.data.userId}`).then(response => setOriginalPoster(response.data))
        }
      })
      .catch((error) => {
        console.log(error.message);
        setTitle("No post found.")
      });
  }, [id]);

  return (
    <div className={styles["post-content"]}>
      <div className={styles["postsection"]}>
        <h2>{title}</h2>
      </div>
      {post && (
        <Fragment>
          <div className={styles["postsection"]}>
            <Post {...post}  {...originalPoster} />
          </div>
          <div className={styles["postsection"]}>
            {commentsList &&
              commentsList.map((comment) => (
                <Post key={comment.id} {...comment} />
              ))}
          </div>
        </Fragment>
      )}
      <div className={styles["postsection"]}>
        <Link to="/">
          <Button text="< Back to startpage" />
        </Link>
      </div>
    </div>
  );
}
