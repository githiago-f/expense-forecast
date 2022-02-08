import { ExpenseContext, useExpenseHooks } from 'context/expense-context';
import { FC } from 'react';
import styles from './Default.module.css';

type Props = unknown;

const Default: FC<Props> = (props) => {
  const hooks = useExpenseHooks();
  return (
    <ExpenseContext.Provider value={hooks}>
      <main className={styles.main}>
        {props.children}
      </main>
    </ExpenseContext.Provider>
  );
};

export { Default };
