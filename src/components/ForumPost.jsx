import { Link } from "react-router-dom";
import classes from "./ForumPost.module.scss";

function ForumPost({ id, title }) {
  return (
    <div className={classes["post-container"]}>
      <Link to={`/post/${id}`}>
        <p>{title}</p>
      </Link>
    </div>
  );
}

export default ForumPost;
