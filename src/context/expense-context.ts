import { Repository } from 'lib/indexeddb/repository';
import { Expense } from 'model/expense';
import { createContext, useEffect, useState } from 'react';

export const ExpenseContext = createContext({expenses: [] as Expense[]});

export const useExpenseHooks = () => {
  const [expenses, setExpenses] = useState([] as Expense[]);

  const loadExpenses = async () => {
    const repository = new Repository<Expense>(Expense.name);

    const loadedExpenses = await repository.listAll();
    setExpenses(loadedExpenses);
  };

  useEffect(() => {
    loadExpenses();
  }, []);

  return {expenses};
};
