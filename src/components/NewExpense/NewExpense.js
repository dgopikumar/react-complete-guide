import React, { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import AddNewExpense from './AddNewExpense';
import './NewExpense.css';

const NewExpense = (props) => {

    const [showForm, setShowForm] = useState(false);

    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
    
        props.onAddExpense(expenseData);
        setShowForm(false);
    }

    const showFormHandler = (isShowForm) => {
        setShowForm(isShowForm);
    }

    return(
        <div className='new-expense'>
            {showForm && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancelClicked={showFormHandler} />}
            {!showForm && <AddNewExpense onAddNewExpense={showFormHandler} />}
        </div>
    );
}

export default NewExpense;

