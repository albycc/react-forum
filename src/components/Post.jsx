import classes from "./Post.module.scss";

export default function Post({ name, email, body }) {
  return (
    <div className={classes["comment-container"]}>
      <div className={classes["comment-avatar-container"]}>
        <p>{email}</p>
      </div>
      <div className={classes["comment-body-container"]}>
        <div className={classes['comment-header-row']}>
          <p>{name}</p>
        </div>
        <div className={classes["comment-text"]}>
            {body}
        </div>
      </div>
    </div>
  );
}
