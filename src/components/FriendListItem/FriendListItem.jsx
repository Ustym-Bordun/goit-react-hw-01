import styles from "./FriendListItem.module.css";
import clsx from "clsx";

export default function FriendListItem({ avatar, name, isOnline }) {
  console.log(styles);

  // console.log(isOnline);

  const status = isOnline ? "Online" : "Offline";
  return (
    <>
      <img className={styles.image} src={avatar} alt={name} width="48" />
      <p className={clsx(styles.text, styles.title)}>{name}</p>
      <p
        className={clsx(styles.text, isOnline ? styles.online : styles.offline)}
      >
        {status}
      </p>
    </>
  );
}
