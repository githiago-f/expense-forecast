import React from 'react';
import { ExpenseTotal } from 'components/ExpenseTotal';
import { MenuNav } from 'components/MenuNav';
import { Overview } from 'components/Overview';
import { Default } from 'templates/Default';
import './styles.css';

const App = () => {
  return(
    <Default>
      <MenuNav />
      <h3 className='uppercase text-xs font-black mb-4'>Financial overview</h3>
      <div className='grid mt-4 gap-8 grid-cols-5'>
        <Overview/>
        <ExpenseTotal />
      </div>
    </Default>
  );
};

export default App;
