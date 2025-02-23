import FriendListItem from "../FriendListItem/FriendListItem";

import styles from "./FriendList.module.css";

export default function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(({ id, avatar, name, isOnline }) => {
        return (
          <li className={styles.item} key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        );
      })}
    </ul>
  );
}
