import React from 'react';
import './ExpenseForm.css';

const AddNewExpense = (props) => {

    const showFormHandler = () => {
        props.onAddNewExpense(true);
    }

    return (
        <div className="new-expense__controls">
            <div className="new-expense__actions">
                <button onClick={showFormHandler}>Add New Expense</button>
            </div>
        </div>
    );
}

export default AddNewExpense;