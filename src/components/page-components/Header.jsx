import styles from "./Header.module.scss";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className={styles["header-container"]}>
      <Link to="/">
        <span>REACT LEARNER</span>
      </Link>
    </header>
  );
}
