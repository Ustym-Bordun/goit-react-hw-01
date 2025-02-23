import clsx from "clsx";

import styles from "./TransactionHistory.module.css";

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.table}>
      <thead className={styles.thead}>
        <tr>
          <th className={styles.th}>Type</th>
          <th className={styles.th}>Amount</th>
          <th className={styles.th}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <tr className={styles.tr} key={id}>
              <td className={clsx(styles.td, styles.type)}>{type}</td>
              <td className={styles.td}>{amount}</td>
              <td className={styles.td}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
