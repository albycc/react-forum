import styles from "./Post.module.scss";
import icon from "../../img/avatar.svg"

export default function Post({ name, email, body }) {
  return (
    <div className={styles["post-container"]}>
      <div className={styles["post-avatar-container"]}>
        <img src={icon} alt={`${name}'s avatar icon`} className={styles["avatar-icon"]}/>
        <p className={styles["avatar-name"]}>{name}</p>
        <p>{email}</p>
      </div>
      <div className={styles["post-body-container"]}>
        <div className={styles["post-text"]}>{body}</div>
      </div>
    </div>
  );
}
