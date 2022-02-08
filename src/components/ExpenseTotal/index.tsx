import { ExpenseContext } from 'context/expense-context';
import { FC, useContext, useMemo } from 'react';
import styles from './ExpenseTotal.module.css';

const ExpenseTotal: FC<unknown> = () => {
  const { expenses } = useContext(ExpenseContext);
  const total = useMemo(
    () =>
      expenses?.reduce(
        (val, i) => val + i.value,
        0,
      ),
    [expenses],
  );
  return (
    <div className={styles.expenseContainer}>
      <h3 className={styles.title}>
        Expense<br/>
        Overview
      </h3>
      <h5 className={styles.currency}>
        {total?.toLocaleString('pt-br', {
          currency: 'BRL',
          style: 'currency',
        })}
      </h5>
    </div>
  );
};

export { ExpenseTotal };
