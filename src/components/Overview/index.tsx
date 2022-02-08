import { FC } from 'react';
import styles from './Overview.module.css';

type Props = unknown;

const Overview: FC<Props> = () => (
  <div className={styles.overviewContainer}>
    <div className={styles.content}>
      <div className={styles.left}>
        <img src="https://via.placeholder.com/500x300" className='w-full h-auto' alt="Chart" />
      </div>
      <div className={styles.right}>
      </div>
    </div>
  </div>
);

export { Overview };
