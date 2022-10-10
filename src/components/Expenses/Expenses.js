import React, {useState} from 'react';
import ExpenseFilter from './ExpenseFilter';
import Card from '../UI/Card';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';

function Expenses(props) {
    const [filteredYear, setFilteredYear] = useState('2021');
    const totalExpenses = props.items;
    const [filteredExpenses, setFilteredExpenses] = useState(props.items);
    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
        var selectedYearExpenses = totalExpenses.filter(function(item) {
            return (item.date.getFullYear().toString() === selectedYear);
        });
        setFilteredExpenses(selectedYearExpenses);
    }
    
    return (
        <div>
            <Card className='expenses'>
            <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            { <ExpensesChart expenses = {filteredExpenses} /> }
            {<ExpensesList items={filteredExpenses}/>}
            </Card>
        </div>
    )
}

export default Expenses;