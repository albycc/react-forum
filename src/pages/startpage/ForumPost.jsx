import { Link } from "react-router-dom";
import styles from "./ForumPost.module.scss";

function ForumPost({ id, title }) {
  return (
    <div className={styles["post-container"]}>
      <Link to={`/post/${id}`}>
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default ForumPost;
