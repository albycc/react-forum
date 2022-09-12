import styles from "./Post.module.scss";

export default function Post({ name, email, body }) {
  return (
    <div className={styles["post-container"]}>
      <div className={styles["post-avatar-container"]}>
        <p>{email}</p>
      </div>
      <div className={styles["post-body-container"]}>
        <div className={styles['post-header-row']}>
          <p>{name}</p>
        </div>
        <div className={styles["post-text"]}>
            {body}
        </div>
      </div>
    </div>
  );
}
