import classes from "./Comment.module.scss";

export default function Comment({ name, email, body }) {
  return (
    <div className={classes["comment-container"]}>
      <div className={classes["comment-avatar-container"]}>
        <p>{email}</p>
      </div>
      <div className={classes["comment-body-container"]}>
        <div className={classes['comment-header-row']}>
          <p>{name}</p>
        </div>
        <div>
            {body}
        </div>
      </div>
    </div>
  );
}
