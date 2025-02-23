import clsx from "clsx";

import styles from "./Profile.module.css";

export default function Profile({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) {
  // console.log(styles);

  return (
    <div className={styles.card}>
      <div className={styles.topPart}>
        <img className={styles.photo} src={image} alt={name} />
        <p className={clsx(styles.text, styles.name)}>{name}</p>
        <p className={clsx(styles.text, styles.shaded)}>@{tag}</p>
        <p className={clsx(styles.text, styles.shaded)}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.item}>
          <span className={styles.text}>Followers</span>
          <span className={clsx(styles.text, styles.number)}>{followers}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.text}>Views</span>
          <span className={clsx(styles.text, styles.number)}>{views}</span>
        </li>
        <li className={styles.item}>
          <span className={styles.text}>Likes</span>
          <span className={clsx(styles.text, styles.number)}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}
