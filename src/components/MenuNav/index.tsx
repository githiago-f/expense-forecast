import { FC } from 'react';
import styles from './MenuNav.module.css';

type Props = unknown;

const MenuNav: FC<Props> = () => (
  <nav className={styles.navContainer}>
    <a href="/">
      <b className={styles.brand}>Expense Forecast</b>
    </a>
    <div>{/** Menu */}</div>
    <div>{/** Search and login button */}</div>
  </nav>
);

export { MenuNav };
