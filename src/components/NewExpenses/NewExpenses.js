import React from "react";
import ExpenseForm from "./ExpensesForm";
import "./NewExpenses.css";
import { v4 as uuidv4 } from "uuid";

function NewExpense(props) {
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: uuidv4().toString(),
    };

    props.onAddExpenseData(expenseData);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
  );
}

export default NewExpense;
