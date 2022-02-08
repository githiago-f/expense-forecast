import { Storage } from 'lib/indexeddb/storage';
import { Expense } from 'model/expense';
import { Income } from 'model/income';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import reportWebVitals from './reportWebVitals';

Storage.instance
  .setVersion(3)
  .addEntities([ Expense.name, Income.name ])
  .connect('expense-forecast');

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
